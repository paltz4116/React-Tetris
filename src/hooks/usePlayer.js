import { useState, useCallback } from "react";

import { generateRandomBlock } from "../tetrominos";
import { checkCollision } from "../helpers";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: [[0], [0]],
    collided: false,
  });

  const rotate = (tetromino, dir) => {
    const rotatedTetromino = tetromino.map((row, index) =>
      tetromino.map((col) => col[index])
    );

    if (dir > 0) return rotatedTetromino.map((row) => row.reverse());
    return rotatedTetromino.reverse();
  };

  const playerRotate = (board, dir) => {
    //copy player object
    const playerCopy = JSON.parse(JSON.stringify(player));
    playerCopy.tetromino = rotate(playerCopy.tetromino, dir);

    const pos = playerCopy.pos.x;
    let offset = 1;

    while (checkCollision(playerCopy, board, { x: 0, y: 0 })) {
      playerCopy.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));

      if(offset > playerCopy.tetromino[0].length) {
        rotate(playerCopy.tetromino, -dir);
        playerCopy.pos.x = pos;
        return;
      }
    }

    setPlayer(playerCopy);
  };

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => {
      return {
        ...prev,
        pos: { x: prev.pos.x + x, y: prev.pos.y + y },
        collided,
      };
    });
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: 4, y: 0 },
      tetromino: generateRandomBlock(),
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer, playerRotate];
};
