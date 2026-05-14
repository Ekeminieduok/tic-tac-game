"use client";

import { CellValue, Player } from "@/hooks/useGame";

interface CellProps {
  value: CellValue;
  index: number;
  currentPlayer: Player;
  isWinning: boolean;
  isPlaying: boolean;
  onClick: (index: number) => void;
}

export default function Cell({
  value,
  index,
  currentPlayer,
  isWinning,
  isPlaying,
  onClick,
}: CellProps) {
  const isEmpty = !value;
  const canHover = isEmpty && isPlaying;

  return (
    <button
      onClick={() => onClick(index)}
      disabled={!canHover}
      aria-label={value ? `Cell ${index + 1}: ${value}` : `Cell ${index + 1}: empty`}
      className={[
        "relative flex items-center justify-center",
        "w-full aspect-square",
        "transition-all duration-200",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400",
        isWinning ? "bg-amber-400/10" : "",
        canHover ? "cursor-pointer hover:bg-white/5 group" : "",
        !isEmpty ? "cursor-not-allowed" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Hover ghost */}
      {canHover && (
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-30 transition-opacity duration-150 pointer-events-none select-none">
          <Mark player={currentPlayer} />
        </span>
      )}

      {/* Actual mark */}
      {value && (
        <span
          className={[
            "relative z-10 transition-all duration-300",
            isWinning ? "scale-110" : "scale-100",
          ].join(" ")}
          style={{
            animation: "popIn 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
          }}
        >
          <Mark player={value} winning={isWinning} />
        </span>
      )}
    </button>
  );
}

function Mark({
  player,
  winning = false,
}: {
  player: CellValue;
  winning?: boolean;
}) {
  if (player === "X") {
    return (
      <svg viewBox="0 0 60 60" className="w-14 h-14" fill="none">
        <line
          x1="12" y1="12" x2="48" y2="48"
          strokeWidth="5"
          strokeLinecap="round"
          className={winning ? "stroke-amber-300" : "stroke-rose-400"}
        />
        <line
          x1="48" y1="12" x2="12" y2="48"
          strokeWidth="5"
          strokeLinecap="round"
          className={winning ? "stroke-amber-300" : "stroke-rose-400"}
        />
      </svg>
    );
  }
  if (player === "O") {
    return (
      <svg viewBox="0 0 60 60" className="w-14 h-14" fill="none">
        <circle
          cx="30" cy="30" r="18"
          strokeWidth="5"
          strokeLinecap="round"
          className={winning ? "stroke-amber-300" : "stroke-sky-400"}
        />
      </svg>
    );
  }
  return null;
}
