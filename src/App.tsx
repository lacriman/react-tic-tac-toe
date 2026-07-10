import "./App.css";
import { useState } from "react";

function Square({
  value,
  onSquareClick,
}: {
  value: string;
  onSquareClick: () => void; // TS: this prop is a function taking no args, returning nothing
}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function calculateWinner(board: string[]): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns

    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  //check combinations
  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}

function Board() {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  const [turn, setTurn] = useState("x");
  const winner = calculateWinner(squares);

  function handleClick(i: number) {
    if (squares[i] || winner) return;

    const next = [...squares]; // copy: react detects change by reference, not by value, so we
    next[i] = turn;            // give it a NEW array. Mutating the old one keeps the same
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
    <>
      {winner && (
        <div className="winMessage">
          <h1 className="winTitle">Winner is: {winner} 🎉🎊🍾</h1>
          <button className="reset" onClick={() => resetBoard()}>
            Reset
          </button>
        </div>
      )}
      <section className="board">
        {squares.map(
          (
            cell,
            i, // render all 9 squares
          ) => (
            <Square key={i} value={cell} onSquareClick={() => handleClick(i)} />
          ),
        )}
      </section>
    </>
  );
}

function App() {
  return (
    <>
      <h1 className="title">Tic-Tac-Toe</h1>
      <Board />
    </>
  );
}

export default App;
