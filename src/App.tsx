import { Link, Outlet } from "react-router-dom";

export function App() {
  return (
    <>
      <nav className="nav">
        <Link to="/">🎮 Arcade</Link>
      </nav>

      <main>
        <Outlet/>
      </main>
    </>
  );
}
