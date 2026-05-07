import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // This sends the user to the home page with the search results
      navigate(`/?search=${query}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-6 bg-gradient-to-b from-black/90 via-black/20 to-transparent text-white backdrop-blur-[2px]">
      
      <div className="flex items-center gap-10">
        <Link to="/" className="text-xl md:text-2xl font-black tracking-tighter uppercase italic text-red-600">
          CINEMA<span className="text-white">HUB</span>
        </Link>

        <div className="hidden lg:flex gap-6 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-300">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/watchlist" className="hover:text-white transition-colors">My List</Link>
          <Link to="#" className="hover:text-white transition-colors">Movies</Link>
          <Link to="#" className="hover:text-white transition-colors">Series</Link>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Search Logic */}
        <div className="flex items-center">
          {isSearchOpen ? (
            <form onSubmit={handleSearch} className="flex items-center bg-black/60 border border-white/20 rounded-sm overflow-hidden animate-in fade-in slide-in-from-right-5">
              <input
                autoFocus
                type="text"
                placeholder="Titles, people, genres"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent px-3 py-1 text-xs outline-none w-40 md:w-64"
                onBlur={() => !query && setIsSearchOpen(false)}
              />
              <button type="submit" className="p-2 hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          ) : (
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-300 hover:text-white transition p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          )}
        </div>
        
        <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-red-700 transition shadow-lg shadow-red-600/20">
          U
        </div>
      </div>
    </nav>
  );
}