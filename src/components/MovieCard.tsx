import type { Movie } from "../type/movie";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group relative cursor-pointer rounded-xl overflow-hidden"
    >
      <Link to={`/movie/${movie.id}`}>
        {/* Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="w-full h-[300px] object-cover"
        />

        {/* Permanent gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Always visible movie info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
          <h3 className="text-sm font-semibold leading-tight drop-shadow">
            {movie.title}
          </h3>
          <p className="text-xs text-gray-200 drop-shadow">
            {movie.release_date?.slice(0, 4)} • ⭐ {movie.vote_average}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}