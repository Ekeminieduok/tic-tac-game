"use client";

import Board from "@/components/Board";
import Scoreboard from "@/components/Scoreboard";
import StatusBar from "@/components/StatusBar";
import { useGame } from "@/hooks/useGame";

export default function Home() {
  const {
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
  } = useGame();

  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center gap-8 p-6">
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <h1 className="text-white/90 text-3xl font-black tracking-[0.3em] uppercase select-none">
        TIC<span className="text-amber-400">·</span>TAC
        <span className="text-amber-400">·</span>TOE
      </h1>
      <Scoreboard scores={scores} draws={draws} currentPlayer={currentPlayer} status={status} />
      <Board board={board} currentPlayer={currentPlayer} winningLine={winningLine} status={status} onCellClick={handleCellClick} />
      <StatusBar status={status} currentPlayer={currentPlayer} winner={winner} onRestart={restartGame} onReset={resetAll} />
    </main>
  );
}
