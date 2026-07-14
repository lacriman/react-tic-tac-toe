import { Board } from "@/games/tic-tac-toe";
import styles from "./TicTacToePage.module.css";

export function TicTacToePage() {
  return (
    <section className={styles.ticTacToe}>
      <h1>Tic-Tac-Toe</h1>
      <Board />
    </section>
  );
}
