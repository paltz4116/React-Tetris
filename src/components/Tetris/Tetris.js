import React, { useState } from "react";

import { createEmptyBoard } from "../../helpers";

import { usePlayer } from "../../hooks/usePlayer";
import { useBoard } from "../../hooks/useBoard";

import Board from "../Board/Board";
import Section from "../Section/Section";

import classes from "./Tetris.module.css";

import { INIT_STATE } from "../../store/constants";

const Tetris = (props) => {
  const [gameOver, setGameOver] = useState(false);
  //const [dropTime, setDropTime] = useState(null);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [board, setBoard] = useBoard(player);

  const movePlayer = (dir) => {
    updatePlayerPos({ x: dir, y: 0 });
  };

  const startGame = () => {
    setBoard(createEmptyBoard());
    resetPlayer();
  };

  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false });
  };

  const dropPlayer = () => {
    drop();
  };

  const move = (code) => {
    if (!gameOver && INIT_STATE.state === "playing") {
      //left
      if (code === "ArrowLeft") {
        movePlayer(-1);
      }
      //Right
      else if (code === "ArrowRight") {
        movePlayer(1);
      }
      //drop
      else if (code === "ArrowDown") {
        dropPlayer();
      }
    }
  };

  return (
    <div
      className={classes.Tetris}
      role="button"
      tabIndex="0"
      onKeyDown={(event) => move(event.code)}
    >
      <Board board={board} />
      <Section nextBlock={player.tetromino} />
    </div>
  );
};

export default Tetris;
