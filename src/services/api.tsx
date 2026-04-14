import axios from "axios";
import type { Movie } from "../type/movie";

const API_KEY = "41f7444b493cd0bf121d832bb9cab315";
const BASE_URL = "https://api.themoviedb.org/3";

/* =========================
   GET POPULAR MOVIES
========================= */
export const getPopularMovies = async (): Promise<Movie[]> => {
  try {
    const res = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    return res.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error;
  }
};

/* =========================
   SEARCH MOVIES
========================= */
export const searchMovies = async (
  query: string
): Promise<Movie[]> => {
  try {
    const res = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return res.data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};

/* =========================
   GET MOVIE DETAILS
========================= */
export const getMovieDetails = async (id: string): Promise<Movie> => {
  try {
    const res = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

/* =========================
   🎬 GET MOVIE TRAILER
========================= */
export const getMovieTrailer = async (id: string) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
    );

    return res.data.results;
  } catch (error) {
    console.error("Error fetching movie trailer:", error);
    throw error;
  }
};