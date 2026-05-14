"use client";

import Cell from "./Cell";
import { CellValue, Player, GameStatus } from "@/hooks/useGame";

interface BoardProps {
  board: CellValue[];
  currentPlayer: Player;
  winningLine: number[] | null;
  status: GameStatus;
  onCellClick: (index: number) => void;
}

export default function Board({
  board,
  currentPlayer,
  winningLine,
  status,
  onCellClick,
}: BoardProps) {
  return (
    <div className="relative">
      {/* Grid lines */}
      <div
        className="grid grid-cols-3 gap-0 relative"
        style={{ width: "min(90vw, 360px)" }}
      >
        {/* Vertical dividers */}
        <div
          className="absolute top-0 bottom-0 border-l-2 border-white/20"
          style={{ left: "33.333%" }}
        />
        <div
          className="absolute top-0 bottom-0 border-l-2 border-white/20"
          style={{ left: "66.666%" }}
        />
        {/* Horizontal dividers */}
        <div
          className="absolute left-0 right-0 border-t-2 border-white/20"
          style={{ top: "33.333%" }}
        />
        <div
          className="absolute left-0 right-0 border-t-2 border-white/20"
          style={{ top: "66.666%" }}
        />

        {board.map((cell, i) => (
          <Cell
            key={i}
            value={cell}
            index={i}
            currentPlayer={currentPlayer}
            isWinning={winningLine?.includes(i) ?? false}
            isPlaying={status === "playing"}
            onClick={onCellClick}
          />
        ))}
      </div>
    </div>
  );
}
