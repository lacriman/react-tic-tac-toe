import { Board } from "@/games/tic-tac-toe";
import "./TicTacToePage.css";

export function TicTacToePage() {
  return (
    <section className="tic-tac-toe__wrapper">
      <h1 className="title">Tic-Tac-Toe</h1>
      <Board />
    </section>
  );
}
