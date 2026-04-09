// src/pages/Home.tsx

import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/api";
import type { Movie } from "../type/movie";

import MovieGrid from "../components/MovieGrid";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/filterBar";
import Loader from "../components/Loader";
import ErrorMessage from "../components/errorMessage";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);

      try {
        let data = query
          ? await searchMovies(query)
          : await getPopularMovies();

      
        if (year) {
          data = data.filter((movie) =>
            movie.release_date?.startsWith(year)
          );
        }

        setMovies(data);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, year]);

  return (
    <div style={{ padding: "20px" }}>
      
      <SearchBar query={query} setQuery={setQuery} />

   
      <FilterBar year={year} setYear={setYear} />

     
      {loading && <Loader />}

      
      {error && <ErrorMessage />}

     
      {!loading && !error && <MovieGrid movies={movies} />}
    </div>
  );
}