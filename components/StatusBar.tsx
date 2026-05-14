"use client";

import { Player, GameStatus } from "@/hooks/useGame";

interface StatusBarProps {
  status: GameStatus;
  currentPlayer: Player;
  winner: Player | null;
  onRestart: () => void;
  onReset: () => void;
}

export default function StatusBar({
  status,
  currentPlayer,
  winner,
  onRestart,
  onReset,
}: StatusBarProps) {
  const playerColor =
    currentPlayer === "X" ? "text-rose-400" : "text-sky-400";
  const winnerColor = winner === "X" ? "text-rose-400" : "text-sky-400";

  return (
    <div
      className="flex flex-col items-center gap-4 w-full"
      style={{ maxWidth: "min(90vw, 360px)" }}
    >
      {/* Status text */}
      <div className="h-8 flex items-center">
        {status === "playing" && (
          <p className="text-sm tracking-widest uppercase text-white/50">
            Player{" "}
            <span className={`font-black ${playerColor}`}>
              {currentPlayer}
            </span>{" "}
            &rsquo;s turn
          </p>
        )}
        {status === "won" && (
          <p
            className="text-sm tracking-widest uppercase"
            style={{ animation: "fadeIn 0.3s ease forwards" }}
          >
            <span className={`font-black ${winnerColor}`}>{winner}</span>
            <span className="text-white/70"> wins the round!</span>
          </p>
        )}
        {status === "draw" && (
          <p
            className="text-sm tracking-widest uppercase text-white/70"
            style={{ animation: "fadeIn 0.3s ease forwards" }}
          >
            It&apos;s a <span className="font-black text-amber-400">draw</span>
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 w-full">
        <button
          onClick={onRestart}
          className="flex-1 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 text-white text-sm font-bold tracking-widest uppercase transition-all duration-200 active:scale-95"
        >
          {status === "playing" ? "Restart" : "Next Round"}
        </button>
        <button
          onClick={onReset}
          className="py-3 px-4 rounded-lg bg-transparent hover:bg-white/5 border border-white/10 hover:border-white/20 text-white/40 hover:text-white/70 text-sm font-bold tracking-widest uppercase transition-all duration-200 active:scale-95"
          title="Reset scores"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
