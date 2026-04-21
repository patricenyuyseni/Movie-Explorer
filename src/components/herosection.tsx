import type { Movie } from "../type/movie";
import { Link } from "react-router-dom";

export default function HeroMovie({ movie }: { movie: Movie }) {
  const backdrop = movie?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "https://via.placeholder.com/1280x720?text=No+Image";

  return (
    <div className="relative w-full h-[70vh] mb-10 overflow-hidden">
      
      <img
        src={backdrop}
        alt={movie.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      
      <div className="relative z-10 flex flex-col justify-center h-full px-12 text-white max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">
          {movie.title}
        </h1>

        <p className="text-gray-300 mb-6">
          {movie.overview || "No description available for this movie."}
        </p>

        <div className="flex gap-4">
          <Link
            to={`/movie/${movie.id}`}
            className="bg-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            ▶ View Details
          </Link>
        </div>
      </div>
    </div>
  );
}