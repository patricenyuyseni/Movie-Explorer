// src/context/WatchlistContext.tsx
import { createContext, useState, useEffect } from "react";
import { Movie } from "../types/Movie";

export const WatchlistContext = createContext<any>(null);

export const WatchlistProvider = ({ children }: any) => {
  const [watchlist, setWatchlist] = useState<Movie[]>(
    JSON.parse(localStorage.getItem("watchlist") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <WatchlistContext.Provider value={{ watchlist, setWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};