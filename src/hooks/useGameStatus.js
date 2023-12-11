import { useState, useEffect, useCallback } from "react";

export const useGameStatus = (rowsClear) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  const linePoints = [40, 100, 300, 1200];

  const calcScore = useCallback(() => {
    if (rowsClear > 0) {
      console.log(rowsClear);
      setScore((prev) => prev + linePoints[rowsClear - 1] * (level + 1));
      setRows((prev) => prev + rowsClear);
    }
  }, [level, linePoints, rowsClear]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsClear, score]);

  return [score, setScore, rows, setRows, level, setLevel];
};
