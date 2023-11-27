export const createEmptyBoard = () => {
  const rows = 20;
  const columns = 10;
  const emptyBoard = [];

  // Fill the board with empty cells
  for (let row = 0; row < rows; row++) {
    emptyBoard.push(Array(columns).fill(0));
  }

  return emptyBoard;
};

export const generateRandomBlock = () => {
  const blocks = [
    [
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [1, 1],
      [1, 1],
    ],
    [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ],
    [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
  ];

  // Randomly choose a block from the array
  const randomIndex = Math.floor(Math.random() * blocks.length);
  const randomBlock = blocks[randomIndex];

  return randomBlock;
};
