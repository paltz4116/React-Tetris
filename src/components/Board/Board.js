import React from "react";

import classes from "./Board.module.css";

const Board = (props) => {
  return (
    <div className={classes.board}>
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
