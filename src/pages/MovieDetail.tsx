import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";
import type { Movie } from "../type/movie";
import { motion } from "framer-motion";

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (id) getMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <p className="text-center mt-10">Loading...</p>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-[90%] max-w-[1100px] mx-auto pt-10 text-white"
    >
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
      >
        Back
      </button>

      <h1 className="text-4xl font-bold mb-6">{movie.title}</h1>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="w-[320px] rounded-xl shadow-lg mb-6"
      />

      <p className="text-gray-300 leading-7 max-w-[700px]">
        {movie.overview}
      </p>
    </motion.div>
  );
}