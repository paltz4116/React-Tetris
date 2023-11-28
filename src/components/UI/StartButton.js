import React from "react";

import classes from "./StartButton.module.css";

const StartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      Click to start
    </button>
  );
};

export default StartButton;
