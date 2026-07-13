import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { HomePage } from "@/pages/HomePage";
import { TicTacToePage } from "@/pages/TicTacToePage";
import { RockPaperScissorsPage } from "@/pages/RockPaperScissorsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "tic-tac-toe", element: <TicTacToePage /> },
      { path: "rock-paper-scissors", element: <RockPaperScissorsPage /> },
    ],
  },
]);
