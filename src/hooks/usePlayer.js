import { useState, useCallback } from "react";

import { generateRandomBlock } from "../tetrominos";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: generateRandomBlock(),
    collided: false,
  });

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => {
      return {
        ...prev,
        pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
        collided,
      };
    });
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: 5, y: 0 },
      tetromino: generateRandomBlock(),
      collided: false,
    });
  });

  return [player, updatePlayerPos, resetPlayer];
};
