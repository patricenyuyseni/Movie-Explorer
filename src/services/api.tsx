import axios from "axios";
import type { Movie } from "../type/movie";

const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

/* =========================
   GET POPULAR MOVIES (PAGE SUPPORT)
========================= */
export const getPopularMovies = async (page = 1): Promise<Movie[]> => {
  try {
    const res = await axios.get(
      `${BASE_URL}/movie/popular`,
      {
        params: {
          api_key: API_KEY,
          page,
        },
      }
    );

    return res.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

/* =========================
   SEARCH MOVIES (PAGE SUPPORT)
========================= */
export const searchMovies = async (
  query: string,
  page = 1
): Promise<Movie[]> => {
  try {
    if (!query.trim()) return [];

    const res = await axios.get(
      `${BASE_URL}/search/movie`,
      {
        params: {
          api_key: API_KEY,
          query,
          page,
        },
      }
    );

    return res.data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};

/* =========================
   GET MOVIE DETAILS
========================= */
export const getMovieDetails = async (id: string): Promise<Movie> => {
  try {
    const res = await axios.get(
      `${BASE_URL}/movie/${id}`,
      {
        params: {
          api_key: API_KEY,
        },
      }
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
      `${BASE_URL}/movie/${id}/videos`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );

    return res.data.results;
  } catch (error) {
    console.error("Error fetching movie trailer:", error);
    return [];
  }
};

/* =========================
   🎯 FILTER BY YEAR (WITH PAGE SUPPORT)
========================= */
export const getMoviesByYear = async (
  year: string,
  page = 1
): Promise<Movie[]> => {
  try {
    const res = await axios.get(
      `${BASE_URL}/discover/movie`,
      {
        params: {
          api_key: API_KEY,
          primary_release_year: year,
          sort_by: "popularity.desc",
          page,
        },
      }
    );

    return res.data.results;
  } catch (error) {
    console.error("Error fetching movies by year:", error);
    return [];
  }
};