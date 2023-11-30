import { useState } from "react";
import { createEmptyBoard } from "../helpers";

export const useBoard = () => {
    const [board, setBoard] = useState(createEmptyBoard());

    return [board, setBoard];
}