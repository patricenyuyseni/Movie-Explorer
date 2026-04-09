import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h2>🎬 Movie Explorer</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/watchlist">Watchlist</Link>
      </div>
    </nav>
  );
}