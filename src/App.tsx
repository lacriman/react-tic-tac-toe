import { Link, Outlet } from "react-router-dom";
import "./styles/App.css";

export function App() {
  return (
    <section className="homeWrapper">
      <nav className="nav">
        <Link to="/">Go Home 🎮</Link>
      </nav>

      <main className="home-page__wrapper">
        <Outlet />
      </main>
    </section>
  );
}
