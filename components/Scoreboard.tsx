"use client";

import { Player } from "@/hooks/useGame";

interface ScoreboardProps {
  scores: Record<Player, number>;
  draws: number;
  currentPlayer: Player;
  status: string;
}

export default function Scoreboard({
  scores,
  draws,
  currentPlayer,
  status,
}: ScoreboardProps) {
  return (
    <div className="flex items-center gap-3 w-full" style={{ maxWidth: "min(90vw, 360px)" }}>
      <ScoreBox
        label="X"
        score={scores.X}
        active={status === "playing" && currentPlayer === "X"}
        color="text-rose-400"
        activeBg="bg-rose-400/10 border-rose-400/40"
      />
      <DrawBox score={draws} />
      <ScoreBox
        label="O"
        score={scores.O}
        active={status === "playing" && currentPlayer === "O"}
        color="text-sky-400"
        activeBg="bg-sky-400/10 border-sky-400/40"
      />
    </div>
  );
}

function ScoreBox({
  label,
  score,
  active,
  color,
  activeBg,
}: {
  label: string;
  score: number;
  active: boolean;
  color: string;
  activeBg: string;
}) {
  return (
    <div
      className={[
        "flex-1 flex flex-col items-center py-3 rounded-lg border transition-all duration-300",
        active ? activeBg : "bg-white/5 border-white/10",
      ].join(" ")}
    >
      <span className={`text-xs font-bold tracking-widest uppercase ${color}`}>
        {label}
      </span>
      <span className="text-3xl font-black text-white tabular-nums mt-1">
        {score}
      </span>
    </div>
  );
}

function DrawBox({ score }: { score: number }) {
  return (
    <div className="flex-1 flex flex-col items-center py-3 rounded-lg border bg-white/5 border-white/10">
      <span className="text-xs font-bold tracking-widest uppercase text-white/40">
        DRAW
      </span>
      <span className="text-3xl font-black text-white/50 tabular-nums mt-1">
        {score}
      </span>
    </div>
  );
}
