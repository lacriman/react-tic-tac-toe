import { Link, Outlet } from "react-router-dom";
import "./styles/App.css";

export function App() {
  return (
    <>
      <nav className="nav">
        <Link to="/">🎮 Home</Link>
      </nav>

      <main className="home-page__wrapper">
        <Outlet />
      </main>
    </>
  );
}
