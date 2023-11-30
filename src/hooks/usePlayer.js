import { useState } from "react";

import { generateRandomBlock } from "../tetrominos";

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        tetromino: generateRandomBlock(),
        collided: false,
    });

    return [player];
}