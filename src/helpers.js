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
