import { useState } from "react";
import { Square } from "./Square.tsx";
import { calculateWinner } from "../logic/calculateWinner.ts";
import { WinnerMessage } from "@/shared/components/WinnerMessage.tsx";
import { CurrentPlayer } from "@/shared/components/CurrentPlayer.tsx";
import styles from "../TicTacToe.module.css";
import type { Player, Squares, PlayerTurn } from "../types.ts";
import { Score } from "@/shared/components/Score.tsx";
import { useScore } from "@/shared/hooks/useScore.ts";

// each mark belongs to one player — a single source of truth for the names,
// reused by the turn heading, the winner message and the score labels.
const PLAYER_NAMES: Record<Player, PlayerTurn> = {
  x: "Player 1",
  o: "Player 2",
};

export function Board() {
  const [squares, setSquares] = useState<Squares>(Array(9).fill(""));
  const [turn, setTurn] = useState<Player>("x");
  const winner = calculateWinner(squares);

  // one score per player, so each card reads from that player's own side
  const player1 = useScore();
  const player2 = useScore();

  // derived, not stored — `turn` already tells us whose turn it is, and the
  // winning mark already tells us who won. No second state to keep in sync.
  const currentPlayer = PLAYER_NAMES[turn];
  const winnerName =
    winner === "x" || winner === "o" ? PLAYER_NAMES[winner] : winner;

  function handleClick(i: number) {
    if (squares[i] || winner) return;

    const next = [...squares]; // copy: react detects change by reference, not by value, so we
    next[i] = turn; // give it a NEW array. Mutating the old one keeps the same
    // reference, react sees "unchanged" and skips the re-render.
    setSquares(next);

    // score updates go in the event handler, never during render.
    // compute from `next` — state isn't updated yet, so `winner` is stale here.
    const result = calculateWinner(next);
    if (result === "x") {
      player1.addWin();
      player2.addLoss();
    } else if (result === "o") {
      player2.addWin();
      player1.addLoss();
    } else if (result === "nobody") {
      player1.addDraw();
      player2.addDraw();
    } else {
      setTurn(turn === "x" ? "o" : "x"); // no winner yet → hand over to the next player
    }
  }

  function resetBoard() {
    setSquares(Array(9).fill(""));
    setTurn("x");
  }

  return (
    // function can return only one value, <> </> is sugar and doesn't exist in DOM
    <section className={styles.wrapper}>
      {!winner && <CurrentPlayer currentPlayer={currentPlayer} />}

      <WinnerMessage winner={winnerName} onReset={resetBoard} />

      <div className={styles.scores}>
        <Score
          label={PLAYER_NAMES.x}
          wins={player1.score.wins}
          losses={player1.score.losses}
          draws={player1.score.draws}
        />
        <Score
          label={PLAYER_NAMES.o}
          wins={player2.score.wins}
          losses={player2.score.losses}
          draws={player2.score.draws}
        />
      </div>

      <div className={styles.board}>
        {squares.map(
          (
            cell,
            i, // render all 9 squares
          ) => (
            <Square key={i} value={cell} onSquareClick={() => handleClick(i)} />
          ),
        )}
      </div>
    </section>
  );
}
