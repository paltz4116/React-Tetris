export const createEmptyBoard = () => {
  const rows = 20;
  const columns = 10;
  const emptyBoard = [];

  // Fill the board with empty cells
  for (let row = 0; row < rows; row++) {
    emptyBoard.push(Array(columns).fill([0, "clear"]));
  }

  return emptyBoard;
};

export const checkCollision = (player, board, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y++) {
    for (let x = 0; x < player.tetromino[y].length; x++) {
      if (player.tetromino[y][x] !== 0) {
        if (
          !board[y + player.pos.y + moveY] ||
          !board[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          board[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          console.log("collided.");
          return true;
        }
      }
    }
  }

  return false;
};
