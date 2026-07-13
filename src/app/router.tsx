import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { HomePage } from "@/pages/HomePage";
import { TicTacToe } from "@/pages/TicTacToePage";
import { RockPaperScissors } from "@/pages/RockPaperScissorsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "tic-tac-toe", element: <TicTacToe /> },
      { path: "rock-paper-scissors", element: <RockPaperScissors /> },
    ],
  },
]);
