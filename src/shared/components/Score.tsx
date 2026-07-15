import styles from "./Score.module.css";

export function Score({
  wins,
  losses,
  draws,
  label,
}: {
  wins: number;
  losses: number;
  draws: number;
  label?: string;
}) {
  return (
    <div className={styles.score}>
      {label && <span className={styles.title}>{label}</span>}
      <div className={styles.stats}>
        <div className={styles.item}>
          <span className={`${styles.value} ${styles.win}`}>{wins}</span>
          <span className={styles.label}>Wins</span>
        </div>
        <div className={styles.item}>
          <span className={`${styles.value} ${styles.loss}`}>{losses}</span>
          <span className={styles.label}>Losses</span>
        </div>
        <div className={styles.item}>
          <span className={`${styles.value} ${styles.draw}`}>{draws}</span>
          <span className={styles.label}>Draws</span>
        </div>
      </div>
    </div>
  );
}
