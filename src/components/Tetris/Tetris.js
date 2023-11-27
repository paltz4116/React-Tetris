import React, { useState } from "react";

import Board from "../Board/Board";
import classes from "./Tetris.module.css";

import { createEmptyBoard, generateRandomBlock } from "../../helpers";
import Section from "../Section/Section";

const Tetris = (props) => {
  const [board, setBoard] = useState(createEmptyBoard());
  const nextBlock = generateRandomBlock();

  return (
    <div className={classes.Tetris}>
      <Board board={board} />
      <Section nextBlock={nextBlock} />
    </div>
  );
};

export default Tetris;
