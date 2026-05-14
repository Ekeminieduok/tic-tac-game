import { useState, useCallback } from "react";

export type Player = "X" | "O";
export type CellValue = Player | null;
export type GameStatus = "playing" | "won" | "draw";

const WINNING_COMBINATIONS: [number, number, number][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner(board: CellValue[]): {
  winner: Player | null;
  line: number[] | null;
} {
  for (const combo of WINNING_COMBINATIONS) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a] as Player, line: combo };
    }
  }
  return { winner: null, line: null };
}

export interface GameState {
  board: CellValue[];
  currentPlayer: Player;
  status: GameStatus;
  winner: Player | null;
  winningLine: number[] | null;
  scores: Record<Player, number>;
  draws: number;
}

export function useGame() {
  const [scores, setScores] = useState<Record<Player, number>>({ X: 0, O: 0 });
  const [draws, setDraws] = useState(0);
  const [board, setBoard] = useState<CellValue[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [status, setStatus] = useState<GameStatus>("playing");
  const [winner, setWinner] = useState<Player | null>(null);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);

  const handleCellClick = useCallback(
    (index: number) => {
      if (board[index] || status !== "playing") return;

      const newBoard = [...board];
      newBoard[index] = currentPlayer;

      const { winner: w, line } = checkWinner(newBoard);

      if (w) {
        setBoard(newBoard);
        setStatus("won");
        setWinner(w);
        setWinningLine(line);
        setScores((prev) => ({ ...prev, [w]: prev[w] + 1 }));
      } else if (newBoard.every((cell) => cell !== null)) {
        setBoard(newBoard);
        setStatus("draw");
        setDraws((d) => d + 1);
      } else {
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      }
    },
    [board, currentPlayer, status]
  );

  const restartGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setStatus("playing");
    setWinner(null);
    setWinningLine(null);
  }, []);

  const resetAll = useCallback(() => {
    restartGame();
    setScores({ X: 0, O: 0 });
    setDraws(0);
  }, [restartGame]);

  return {
    board,
    currentPlayer,
    status,
    winner,
    winningLine,
    scores,
    draws,
    handleCellClick,
    restartGame,
    resetAll,
  };
}
