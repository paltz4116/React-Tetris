import React from "react";

import classes from "../Board/Board.module.css";

const Section = (props) => {
  let nextBlock = [];

  for (let i = 0; i < 2; i++) {
    nextBlock.push(Array(4).fill(0));
  }

  nextBlock = nextBlock.map((row, rowIndex) => {
    return row.map((column, colIndex) => {
      return props.nextBlock[rowIndex][colIndex] ? 1 : 0;
    });
  });

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
