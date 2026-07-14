import styles from "./WinnerMessage.module.css";

export function WinnerMessage({
  winner,
  onReset,
}: {
  winner: string | null;
  onReset: () => void;
}) {
  if (!winner) return;

  return (
    <>
      <div className={styles.winMessage}>
        <h1 className={styles.winTitle}>
          {winner === "nobody" ?
            "It's a tie 😔"
          : `Winner is: ${winner} 🎉🎊🍾`}
        </h1>
        <button className={styles.reset} onClick={() => onReset()}>
          Reset
        </button>
      </div>
    </>
  );
}
