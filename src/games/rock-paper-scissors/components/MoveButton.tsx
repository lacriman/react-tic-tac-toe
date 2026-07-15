import type { Move } from "../types";
import styles from "../RockPaperScissors.module.css";

export function MoveButton({
  move,
  onMoveClick,
}: {
  move: Move;
  onMoveClick: () => void; // fires when this move is picked
}) {
  return (
    <button className={styles.move} onClick={onMoveClick}>
      {move}
    </button>
  );
}
