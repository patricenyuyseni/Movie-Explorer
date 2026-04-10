
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";
import type { Movie } from "../type/movie";
import { motion } from "framer-motion";
import Loader from "../components/Loader";

export default function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) return;

      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <Loader />;
  if (!movie) return <p>Movie not found</p>;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ padding: "20px" }}
    >
     
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      
      <h1>{movie.title}</h1>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "300px", borderRadius: "10px" }}
      />

      <p><strong>⭐ Rating:</strong> {movie.vote_average}</p>
      <p><strong>📅 Release Date:</strong> {movie.release_date}</p>

      <p style={{ maxWidth: "600px" }}>
        <strong>Overview:</strong> {movie.overview}
      </p>
    </motion.div>
  );
}