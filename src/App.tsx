import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./App.module.css";

const GAME_NAMES: Record<string, string> = {
  "/tic-tac-toe": "Tic Tac Toe",
  "/rock-paper-scissors": "Rock Paper Scissors",
};

export function App() {
  const { pathname } = useLocation();
  const gameName = GAME_NAMES[pathname] ?? "";

  return (
    <section className={styles.wrapper}>
      <nav className={styles.nav}>
        <h1 className={styles.title}>{gameName}</h1>
        <Link to="/">Go Home 🎮</Link>
      </nav>

      <main className={styles.content}>
        <Outlet />
      </main>
    </section>
  );
}
