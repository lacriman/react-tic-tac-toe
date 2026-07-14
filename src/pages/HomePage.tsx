import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

export function HomePage() {
  return (
    <section className={styles.homePage}>
      <h1>Choose a game</h1>
      <div className={styles.list}>
        <Link to="/tic-tac-toe" className={styles.item}>
          Tic Tac Toe
        </Link>
        <Link to="/rock-paper-scissors" className={styles.item}>
          Rock Paper Scissor
        </Link>
      </div>
    </section>
  );
}
