import { RockPaperScissors } from "@/games/rock-paper-scissors";
import styles from "./RockPaperScissorsPage.module.css";

export function RockPaperScissorsPage() {
  return (
    <section className={styles.rockPaperScissors}>
      <RockPaperScissors />
    </section>
  );
}
