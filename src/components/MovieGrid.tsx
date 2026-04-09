import type { Movie } from "../type/movie";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies }: { movies: Movie[] }) {
  return (
    <div className="grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}