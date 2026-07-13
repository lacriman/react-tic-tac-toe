import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <section>
      <h1>Choose a game</h1>
      <div className="games">
        <Link to="/tic-tac-toe">Tic Tac Toe</Link>
        <Link to="/rock-paper-scissors">Rock Paper Scissor</Link>
      </div>
    </section>
  );
}
