import React from "react";

import StartButton from "../UI/StartButton";
import classes from "./Board.module.css";

const Board = (props) => {
  return (
    <div className={classes.board}>
      {!props.gameOver ? <StartButton onClick={props.handleStart} /> : ""}
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
