import { useState } from "react";
import { MoveButton } from "./MoveButton.tsx";
import { calculateWinner } from "../logic/calculateWinner.ts";
import styles from "../RockPaperScissors.module.css";
import { useScore } from "@/shared/hooks/useScore";
import { Score } from "@/shared/components/Score.tsx";
import type { Move, Result } from "../types.ts";
import { randomItem } from "@/shared/utils/random.ts";

const MOVES: Move[] = ["rock", "paper", "scissors"];

const RESULT_TEXT: Record<Result, string> = {
  win: "You win! 🎉",
  lose: "You lose 😔",
  draw: "It's a draw 🤝",
};

export function RockPaperScissors() {
  const [playerMove, setPlayerMove] = useState<Move | null>(null);
  const [computerMove, setComputerMove] = useState<Move | null>(null);
  const { score, addWin, addLoss, addDraw } = useScore();

  // derived, not stored — same idea as `winner` in tic-tac-toe
  const result =
    playerMove && computerMove ?
      calculateWinner(playerMove, computerMove)
    : null;

  function play(move: Move) {
    const computer = randomItem(MOVES);
    setPlayerMove(move);
    setComputerMove(computer);

    // score updates go in the event handler, never during render.
    // compute from the local values — state isn't updated yet here.
    const outcome = calculateWinner(move, computer);
    if (outcome === "win") addWin();
    else if (outcome === "lose") addLoss();
    else addDraw();
  }

  return (
    <section className={styles.wrapper}>
      {result && (
        <div className={styles.result}>
          <p>You picked {playerMove}</p>
          <p>Computer picked {computerMove}</p>
          <h2>{RESULT_TEXT[result]}</h2>
        </div>
      )}

      <Score wins={score.wins} losses={score.losses} draws={score.draws} />

      <div className={styles.moves}>
        {MOVES.map((move) => (
          <MoveButton key={move} move={move} onMoveClick={() => play(move)} />
        ))}
      </div>
    </section>
  );
}
