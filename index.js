const { client } = require("./db");
const path = require("path");
client.connect();

const { PORT = 4000 } = process.env;
const express = require("express");
const server = express();
const morgan = require("morgan");
server.use(morgan("dev"));
server.use(express.json());
server.use(express.static(path.join(__dirname, "./client", "build")));
server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});

const apiRouter = require("./api");
server.use("/api", apiRouter);
server.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});
