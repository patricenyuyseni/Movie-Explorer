

import { useContext } from "react";
import { WatchlistContext } from "../context/watchlistcontext";
import MovieGrid from "../components/MovieGrid";

export default function Watchlist() {
  const { watchlist } = useContext(WatchlistContext);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">
      <div className="w-[90%] max-w-[1300px] mx-auto pt-10">
        <h2 className="text-3xl font-bold mb-8">🎬 Your Watchlist</h2>

        {watchlist.length === 0 ? (
          <p className="text-gray-400">No movies added yet.</p>
        ) : (
          <MovieGrid movies={watchlist} />
        )}
      </div>
    </div>
  );
}