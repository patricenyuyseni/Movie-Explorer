// src/services/api.ts
import axios from "axios";
import { Movie } from "../types/Movie";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async (): Promise<Movie[]> => {
  const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  return res.data.results;
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const res = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return res.data.results;
};

export const getMovieDetails = async (id: string): Promise<Movie> => {
  const res = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );
  return res.data;
};