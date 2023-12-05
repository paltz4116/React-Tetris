import React from "react";

import { TETRIS_LIST } from "../../store/constants";

import classes from "../Board/Board.module.css";

const Section = (props) => {
  let nextBlock = [];

  for (let i = 0; i < 2; i++) {
    nextBlock.push(Array(4).fill(0));
  }

  if (props.nextBlockIndex !== null) {
    const sampleTetris = JSON.parse(
      JSON.stringify(TETRIS_LIST[props.nextBlockIndex])
    );

    nextBlock = nextBlock.map((row, rowIndex) => {
      return row.map((column, colIndex) => {
        return sampleTetris[rowIndex][colIndex] ? 1 : 0;
      });
    });
  }

  return (
    <section>
      <div className={classes.board}>
        {nextBlock.map((row, rowIndex) => (
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
    </section>
  );
};

export default Section;
