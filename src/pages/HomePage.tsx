import { Link } from "react-router-dom";
import  "./HomePage.css"

export function HomePage() {
  return (
    <section className="home-page">
      <h1 className="home-page__title">Choose a game</h1>
      <div className="home-page__list">
        <Link to="/tic-tac-toe" className="home-page__item">Tic Tac Toe</Link>
        <Link to="/rock-paper-scissors" className="home-page__item">Rock Paper Scissor</Link>
      </div>
    </section>
  );
}
