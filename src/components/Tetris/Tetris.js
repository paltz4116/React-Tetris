import React, { useState } from "react";

import Board from "../Board/Board";
import classes from "./Tetris.module.css";

import { createEmptyBoard } from "../../helpers";
import { generateRandomBlock } from "../../tetrominos";
import Section from "../Section/Section";

const Tetris = (props) => {
  const [board, setBoard] = useState(createEmptyBoard());
  const [gameOver, setGameOver] = useState(false);
  const nextBlock = generateRandomBlock();

  const handleStartGame = () => {
    setGameOver(true);
  };

  return (
    <div className={classes.Tetris}>
      <Board board={board} handleStart={handleStartGame} gameOver={gameOver} />
      <Section nextBlock={nextBlock} />
    </div>
  );
};

export default Tetris;
