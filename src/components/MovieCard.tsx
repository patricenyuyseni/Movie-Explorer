import type { Movie } from "../type/movie";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative cursor-pointer rounded-lg overflow-hidden bg-[#1a1a1a] transition-all duration-300"
    >
      <Link to={`/movie/${movie.id}`}>
      
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="w-full aspect-[2/3] object-cover transition-opacity duration-300 group-hover:opacity-80"
          alt={movie.title}
        />

      
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

      
        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
          <h3 className="text-xs md:text-sm font-bold uppercase tracking-wider mb-1 line-clamp-1">
            {movie.title}
          </h3>
          <div className="flex items-center gap-2 text-[10px] text-gray-300 font-medium">
            <span className="text-red-600">★ {movie.vote_average.toFixed(1)}</span>
            <span>•</span>
            <span>{movie.release_date?.slice(0, 4)}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}