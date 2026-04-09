// src/pages/MovieDetail.tsx
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

  if (!movie) return <p>Loading...</p>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      <p>{movie.overview}</p>
    </motion.div>
  );
}