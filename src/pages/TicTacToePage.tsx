import { Board } from "@/games/tic-tac-toe";
import "./TicTacToePage.css"

export function TicTacToePage() {
  return (
    <section>
      <h1 className="title">Tic-Tac-Toe</h1>
      <Board />
    </section>
  );
}
