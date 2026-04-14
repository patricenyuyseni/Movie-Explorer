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
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="w-full h-[300px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />

        <div className="absolute bottom-0 p-3 opacity-0 group-hover:opacity-100 transition">
          <h3 className="text-sm font-semibold">{movie.title}</h3>
          <p className="text-xs text-gray-300">
            {movie.release_date?.slice(0, 4)} • ⭐ {movie.vote_average}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}