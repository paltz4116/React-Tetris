import React, { useState } from "react";
import Board from "../Board/Board";

const Tetris = (props) => {
  const createEmptyBoard = () => {
    const rows = 20;
    const columns = 10;
    const emptyBoard = [];

    // Fill the board with empty cells
    for (let row = 0; row < rows; row++) {
      emptyBoard.push(Array(columns).fill(0));
    }

    return emptyBoard;
  };

  const [board, setBoard] = useState(createEmptyBoard());

  return <Board board={board} />;
};

export default Tetris;
