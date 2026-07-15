import type { Move, Result } from "../types";

// each move beats the one it maps to
const BEATS: Record<Move, Move> = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

export function calculateWinner(player: Move, computer: Move): Result {
  if (player === computer) return "draw";
  return BEATS[player] === computer ? "win" : "lose";
}
