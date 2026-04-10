import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MovieDetail from "./pages/MovieDetail";
import Watchlist from "./pages/watchlist";

export default function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    
    </BrowserRouter>
  );
}