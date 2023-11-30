import { useState, useEffect } from "react";
import { createEmptyBoard } from "../helpers";

export const useBoard = (player, resetPlayer) => {
  const [board, setBoard] = useState(createEmptyBoard());

  useEffect(() => {
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

      return newBoard;
    };

    setBoard((prev) => updateBoard(prev));
  }, [player]);

  return [board, setBoard];
};
