import { useState } from "react";
import { Square } from "./Square.tsx";
import { calculateWinner } from "../logic/calculateWinner.ts";
import { WinnerMessage } from "@/shared/components/WinnerMessage.tsx";
import styles from "../TicTacToe.module.css";
import type { Player, Squares } from "../types.ts";

export function Board() {
  const [squares, setSquares] = useState<Squares>(Array(9).fill(""));
  const [turn, setTurn] = useState<Player>("x");
  const winner = calculateWinner(squares);

  function handleClick(i: number) {
    if (squares[i] || winner) return;

    const next = [...squares]; // copy: react detects change by reference, not by value, so we
    next[i] = turn; // give it a NEW array. Mutating the old one keeps the same
    // reference, react sees "unchanged" and skips the re-render.

    setSquares(next);
    setTurn(turn === "x" ? "o" : "x");
  }

  function resetBoard() {
    setSquares(Array(9).fill(""));
    setTurn("x");
  }

  return (
    // function can return only one value, <> </> is sugar and doesn't exist in DOM
    <section className={styles.wrapper}>
      <WinnerMessage winner={winner} onReset={resetBoard} />
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
