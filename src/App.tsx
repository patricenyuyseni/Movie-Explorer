import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MovieDetail from "./pages/MovieDetail";
import Watchlist from "./pages/watchlist";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/watchlist" element={<Watchlist />} />
       
      </Routes>

      <Footer />
    </>
  );
}