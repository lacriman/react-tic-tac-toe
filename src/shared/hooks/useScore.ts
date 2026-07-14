import { useState } from "react";

export function useScore() {
  const [score, setScore] = useState({ wins: 0, looses: 0, draws: 0 });

  const addWin = () => setScore((s) => ({ ...s, wins: s.wins + 1 }));
  const addLoss = () => setScore((s) => ({ ...s, looses: s.looses + 1 }));
  const addDraw = () => setScore((s) => ({ ...s, draws: s.draws + 1 }));
  const reset = () => setScore({ wins: 0, looses: 0, draws: 0 });

  return { score, addWin, addLoss, addDraw, reset };
}
