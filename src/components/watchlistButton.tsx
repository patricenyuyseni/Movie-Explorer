import { useContext } from "react";
import { WatchlistContext } from "../../context/WatchlistContext";
import { Movie } from "../../types/Movie";

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