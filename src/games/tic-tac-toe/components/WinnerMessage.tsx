import type { PlayerTurn } from "../types";
import styles from "./WinnerMessage.module.css";

export function WinnerMessage({
  winner,
  onReset,
}: {
  winner: PlayerTurn | "draw" | null;
  onReset: () => void;
}) {
  if (!winner) return null; // render nothing until there's a result

  return (
    <div className={styles.winMessage}>
      <h1 className={styles.winTitle}>
        {winner === "draw" ?
          "It's a tie 😔"
        : `Winner is: ${winner} 🎉🎊🍾`}
      </h1>
      <button className={styles.reset} onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
