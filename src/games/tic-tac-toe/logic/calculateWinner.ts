import type { Cell, GameResult } from "../types";

export function calculateWinner(board: Cell[]): GameResult | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns

    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  // check combinations
  for (const [a, b, c] of lines) {
    const mark = board[a];
    // truthy check narrows `mark` from Cell ("x" | "o" | "") to Player,
    // so the return type stays Player — never the empty string.
    if (mark && mark === board[b] && mark === board[c]) {
      return mark;
    }
  }

  if (!board.includes("")) return "draw";

  return null;
}
