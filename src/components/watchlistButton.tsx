import { useContext } from "react";
import { WatchlistContext } from "../context/watchlistcontext";
import type { Movie } from "../type/movie";

export default function WatchlistButton({ movie }: { movie: Movie }) {
  const { watchlist, setWatchlist } = useContext(WatchlistContext);

  const isAdded = watchlist.some((m: Movie) => m.id === movie.id);

  const toggleWatchlist = () => {
    if (isAdded) {
      setWatchlist(watchlist.filter((m: Movie) => m.id !== movie.id));
    } else {
      setWatchlist([...watchlist, movie]);
    }
  };

  return (
    <button onClick={toggleWatchlist}>
      {isAdded ? "Remove" : "Add to Watchlist"}
    </button>
  );
}