// api/users.js
const jwt = require("jsonwebtoken");
const express = require("express");
const usersRouter = express.Router();
const { requireUser } = require("./utils");

usersRouter.use((req, res, next) => {
  console.log("A request is being made to /users");

  next(); // THIS IS DIFFERENT
});

// NEW
const {
  getAllUsers,
  getUserByUsername,
  createUser,
  getUserById,
  updateUser,
} = require("../db");

// UPDATE
usersRouter.get("/", async (req, res) => {
  const users = await getAllUsers();

  res.send({
    users,
  });
});

usersRouter.post("/login", async (req, res, next) => {
  const { username, password } = req.body;

  // request must have both
  if (!username || !password) {
    next({
      name: "MissingCredentialsError",
      message: "Please supply both a username and password",
    });
  }

  try {
    const user = await getUserByUsername(username);
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET
    );
    if (user && user.password == password) {
      // create token & return to user
      res.send({ message: "you're logged in!", token: token });
    } else {
      next({
        name: "IncorrectCredentialsError",
        message: "Username or password is incorrect",
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

usersRouter.post("/register", async (req, res, next) => {
  const { username, password, name, location } = req.body;

  try {
    const _user = await getUserByUsername(username);

    if (_user) {
      next({
        name: "UserExistsError",
        message: "A user by that username already exists",
      });
    }

    const user = await createUser({
      username,
      password,
      name,
      location,
    });
    console.log(user);
    const token = jwt.sign(
      {
        id: user.id,
        username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1w",
      }
    );

    res.send({
      message: "thank you for signing up",
      token,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

usersRouter.delete("/:userId", requireUser, async (req, res, next) => {
  try {
    const user = await getUserById(req.params.userId);

    if (user && user.id === req.user.id) {
      const updatedUser = await updateUser(user.id, { active: false });

      res.send({ user: updatedUser });
    } else {
      // if there was a post, throw UnauthorizedUserError, otherwise throw PostNotFoundError
      next(
        post
          ? {
              name: "UnauthorizedUserError",
              message: "You cannot delete a user which is not you",
            }
          : {
              name: "UserNotFoundError",
              message: "That user does not exist",
            }
      );
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = usersRouter;
