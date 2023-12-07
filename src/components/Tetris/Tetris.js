import React, { useState } from "react";

import { createEmptyBoard, checkCollision } from "../../helpers";

import { usePlayer } from "../../hooks/usePlayer";
import { useBoard } from "../../hooks/useBoard";
import { useFocus } from "../../hooks/useFocus";
import { useInterval } from "../../hooks/useInterval";

import Board from "../Board/Board";
import Section from "../Section/Section";

import classes from "./Tetris.module.css";

import { INIT_STATE } from "../../store/constants";

const Tetris = (props) => {
  const [gameOver, setGameOver] = useState(false);
  const [dropTime, setDropTime] = useState(null);
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [board, setBoard] = useBoard(player, resetPlayer);
  const { ref, isFocused, setIsFocused } = useFocus(false);

  console.log("re-render");

  const movePlayer = (dir) => {
    if (!checkCollision(player, board, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    setBoard(createEmptyBoard());
    setDropTime(1000);
    resetPlayer();
    //window.onkeydown = move;
    setGameOver(false);
  };

  const drop = () => {
    if (!checkCollision(player, board, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = ({ code }) => {
    if (!gameOver) {
      if (code === "ArrowDown") {
        setDropTime(1000);
      }
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const move = ({ code }) => {
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
      } else if (code === "ArrowUp") {
        playerRotate(board, 1);
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <div
      className={classes.Tetris}
      role="button"
      tabIndex="0"
      ref={ref}
      onKeyDown={(event) => move(event)}
      onKeyUp={keyUp}
    >
      <Board board={board} startGame={startGame} setIsFocused={setIsFocused} />
      <Section nextBlockIndex={player.tetrominoIndex} />
    </div>
  );
};

export default Tetris;
