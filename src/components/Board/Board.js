import React, { useState } from "react";

import { INIT_STATE } from "../../store/constants";
import StartButton from "../UI/StartButton";
import classes from "./Board.module.css";

const Board = (props) => {
  const [startState, setStartState] = useState("stop");

  const handleStart = () => {
    INIT_STATE.state = "playing";
    setStartState('playing');
  };

  return (
    <div className={classes.board}>
      {startState === "stop" ? <StartButton onClick={handleStart} /> : ""}
      {props.board.map((row, rowIndex) => (
        <div key={rowIndex} className={classes.row}>
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`${classes.cell} ${cell ? classes.block : ""}`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
