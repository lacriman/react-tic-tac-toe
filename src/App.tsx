import "./styles/App.css";
import { Board } from "./games/tic-tac-toe/components/Board.tsx";

function App() {
  return (
    <>
      <h1 className="title">Tic-Tac-Toe</h1>
      <Board />
    </>
  );
}

export default App;
