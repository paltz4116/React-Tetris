import React from "react";

const Board = (props) => {
  return (
    <div className="board">
      {props.board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div key={colIndex} className={`cell ${cell ? "block" : ""}`}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
