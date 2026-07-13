import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <h2>Select a game</h2>
      <div className="games">
        <Link to="/tic-tac-toe">
          <button>Tic Tac Toe</button>
        </Link>
        <Link to="/rock-paper-scissors">
          <button>Rock Paper Scissor</button>
        </Link>
      </div>
    </>
  );
}
