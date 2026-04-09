// src/components/movie/MovieCard.tsx
import type { Movie } from "../type/movie";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Link to={`/movie/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.slice(0, 4)}</p>
        <p>⭐ {movie.vote_average}</p>
      </Link>
    </motion.div>
  );
}