import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-[#0b0f19] text-white">
      
      {/* Title */}
      <Link to="/" className="text-2xl font-bold">
        🎬 Movie Explorer
      </Link>

      {/* Links */}
      <div className="flex gap-6 text-gray-300">
        <Link to="/" className="hover:text-white transition">
          Home
        </Link>
        <Link to="/watchlist" className="hover:text-white transition">
          Watchlist
        </Link>
      </div>
    </nav>
  );
}