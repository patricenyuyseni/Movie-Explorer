import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails, getMovieTrailer } from "../services/api";
import type { Movie } from "../type/movie";
import { motion } from "framer-motion";

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState<Movie | null>(null);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    
    getMovieDetails(id).then(setMovie);

    
    getMovieTrailer(id).then((videos) => {
      const trailer = videos.find(
        (v: any) => v.type === "Trailer" && v.site === "YouTube"
      );

      if (trailer) {
        setTrailerKey(trailer.key);
      }
    });
  }, [id]);

  if (!movie) {
    return (
      <p className="text-center mt-10 text-white">Loading...</p>
    );
  }

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

     
      {trailerKey ? (
        <iframe
          className="w-full h-[450px] rounded-xl mb-6"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          allowFullScreen
          title="Movie Trailer"
        />
      ) : (
        <p className="text-gray-400 mb-6">
          No trailer available for this movie.
        </p>
      )}

     
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="w-[320px] rounded-xl shadow-lg"
        />

        <div>
          <p className="text-gray-300 leading-7 max-w-[700px]">
            {movie.overview}
          </p>

          <p className="mt-4 text-gray-400">
            ⭐ Rating: {movie.vote_average}
          </p>

          <p className="text-gray-400">
            📅 Release Date: {movie.release_date}
          </p>
        </div>
      </div>
    </motion.div>
  );
}