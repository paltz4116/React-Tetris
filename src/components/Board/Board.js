import React, { useState } from "react";

import StartButton from "../UI/StartButton";

import classes from "./Board.module.css";

import { INIT_STATE } from "../../store/constants";

const Board = (props) => {
  const [initState, setInitState] = useState("stop");

  const handleInitState = () => {
    setInitState("playing");
    INIT_STATE.state = "playing";
    props.startGame();
    props.setIsFocused(true);
  };

  return (
    <div className={classes.board}>
      {initState === "stop" ? <StartButton onClick={handleInitState} /> : ""}
      {props.board.map((row, rowIndex) => (
        <div key={rowIndex} className={classes.row}>
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`${classes.cell} ${cell[0] ? classes.block : ""}`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
