import React from "react";

import classes from "./StartButton.module.css";

const StartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default StartButton;
