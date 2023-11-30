import React, { useState } from "react";

import { usePlayer } from "../../hooks/usePlayer";
import { useBoard } from "../../hooks/useBoard";

import Board from "../Board/Board";
import classes from "./Tetris.module.css";

import Section from "../Section/Section";

const Tetris = (props) => {
  const [gameOver, setGameOver] = useState(false);
  //const [dropTime, setDropTime] = useState(null);

  const [player] = usePlayer();
  const [board, setBoard] = useBoard(player);

  const handleStartGame = () => {
    setGameOver(true);
  };

  return (
    <div className={classes.Tetris}>
      <Board board={board} handleStart={handleStartGame} gameOver={gameOver} />
      <Section nextBlock={player.tetromino} />
    </div>
  );
};

export default Tetris;
