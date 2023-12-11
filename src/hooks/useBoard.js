import { useState, useEffect } from "react";
import { createEmptyBoard } from "../helpers";

export const useBoard = (player, resetPlayer) => {
  const [board, setBoard] = useState(createEmptyBoard());
  const [rowsClear, setRowsClear] = useState(0);

  useEffect(() => {
    setRowsClear(0);

    const sweepRows = (newBoard) => {
      setRowsClear(0);
      return newBoard.reduce((acc, row) => {
        if (row.findIndex((cell) => cell[0] === 0) === -1) {
          setRowsClear((prev) => prev + 1);
          acc.unshift(new Array(newBoard[0].length).fill([0, "clear"]));

          return acc;
        }
        acc.push(row);

        return acc;
      }, []);
    };

    const updateBoard = (prevBoard) => {
      //flush the board
      const newBoard = prevBoard.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      //draw
      player.tetromino.forEach((row, y) => {
        row.forEach((col, x) => {
          if (col !== 0) {
            newBoard[y + player.pos.y][x + player.pos.x] = [
              col,
              `${player.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });

      if (player.collided) {
        resetPlayer();

        return sweepRows(newBoard);
      }

      return newBoard;
    };

    setBoard((prev) => updateBoard(prev));
  }, [
    player.collided,
    player.pos.x,
    player.pos.y,
    player.tetromino,
    resetPlayer,
  ]);

  return [board, setBoard, rowsClear];
};
