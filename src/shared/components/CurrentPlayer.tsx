import styles from "./CurrentPlayer.module.css";

export function CurrentPlayer({ currentPlayer }: { currentPlayer: string }) {
  return (
    <div className={styles.winMessage}>
      <h1 className={styles.winTitle}>
        {`Current Player is: ${currentPlayer}`}
      </h1>
    </div>
  );
}
