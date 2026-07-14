import { Link, Outlet } from "react-router-dom";
import styles from "./App.module.css";

export function App() {
  return (
    <section className={styles.wrapper}>
      <nav className={styles.nav}>
        <Link to="/">Go Home 🎮</Link>
      </nav>

      <main className={styles.content}>
        <Outlet />
      </main>
    </section>
  );
}
