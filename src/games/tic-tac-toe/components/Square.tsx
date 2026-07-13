import styles from "../TicTacToe.module.css";

export function Square({
  value,
  onSquareClick,
}: {
  value: string;
  onSquareClick: () => void; // TS: this prop is a function taking no args, returning nothing
}) {
  return (
    <button className={styles.square} onClick={onSquareClick}>
      {value}
    </button>
  );
}
