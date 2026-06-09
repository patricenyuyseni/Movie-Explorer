import { Link } from "react-router-dom";
import type { Movie } from "../type/movie";

export default function HeroMovie({ movie }: { movie: Movie }) {
  const backdrop = movie?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "";

  return (
    <div className="relative w-full h-[85vh] flex items-center overflow-hidden">
    
      <img
        src={backdrop}
        className="absolute inset-0 w-full h-full object-cover object-top"
        alt=""
      />

    
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19] via-[#0b0f19]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent" />

      
      <div className="relative z-10 w-[90%] max-w-[1300px] mx-auto px-6">
        <span className="text-red-600 font-bold tracking-[0.3em] text-xs mb-4 block uppercase">
          Trending Now
        </span>
        <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter leading-none max-w-4xl drop-shadow-2xl">
          {movie.title}
        </h1>

        <p className="text-gray-300 text-lg mb-8 max-w-xl line-clamp-3 leading-relaxed">
          {movie.overview}
        </p>

        <div className="flex gap-4">
          <Link
            to={`/movie/${movie.id}`}
            className="bg-red-600 px-8 py-4 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-red-700 transition-transform active:scale-95"
          >
            ▶ Watch Now
          </Link>
          <button className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-white/20 transition">
            + My List
          </button>
        </div>
      </div>
    </div>
  );
}