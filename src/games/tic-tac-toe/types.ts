export type PlayerTurn = "Player 1" | "Player 2";
export type Player = "x" | "o";
export type Cell = Player | "";
export type Squares = Cell[];

// the outcome of a finished check: a winning mark, a draw, or null while
// the game is still going. Mirrors rock-paper-scissors' `Result`.
export type GameResult = Player | "draw";
