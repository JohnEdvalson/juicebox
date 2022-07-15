import React from "react";
import styles from "../styles/Posts.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Home() {
  //We're trying out some cool material UI framework raccoon stuff.
  return (
    <div>
      Henlo I am raccoon
      <br></br>
      <div>
        <TextField
          className={styles.textField}
          label="Username"
          variant="outlined"
        />
        <Button id="RaccoonButton" variant="outlined">
          Raccoon Sign In
        </Button>
      </div>
    </div>
  );
}
