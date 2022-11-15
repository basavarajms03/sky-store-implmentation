import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/home";
import { MoviePlayer } from "./Components/MoviePlayer/MoviePlayer";
import MoviesInfo from "./Components/Movies-Info/movies-Info";
import { RedeemVoucher } from "./Components/Redeem-Voucher/redeem-voucher";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* COnfigure Routes */}
        <Route exact path="/" element={<Home />} />
        <Route path="/movies">
          <Route
            path="/movies"
            element={<Navigate to="/movies/new-to-rent" replace />}
          />
          <Route path=":id" element={<MoviesInfo />} />
          <Route path=":id/:show" element={<MoviePlayer />} />
          <Route path="new-to-rent" element={<Home />} />
          <Route path="new-to-buy" element={<Home />} />
          <Route path="pre-order" element={<Home />} />
          <Route path="movie-box-sets" element={<Home />} />
          <Route path="official-film-chart" element={<Home />} />
          <Route path="browse" element={<Home />} />
          <Route path="a-z" element={<Home />} />
        </Route>
        <Route path="/sky-store-premiere" element={<Home />} />
        <Route path="/sale">
          <Route
            path="/sale"
            element={<Navigate to="/sale/store-picks" replace />}
          />
          <Route path="store-picks" element={<Home />} />
          <Route path="under34" element={<Home />} />
          <Route path="under45" element={<Home />} />
          <Route path="under56" element={<Home />} />
          <Route path="tv-boxsets-on-offer" element={<Home />} />
        </Route>
        <Route path="/sky-vip">
          <Route
            path="/sky-vip"
            element={<Navigate to="/sky-vip/sky-vip-gifts" replace />}
          />
          <Route path="sky-vip-gifts" element={<Home />} />
        </Route>
        <Route path="/tv">
          <Route path="/tv" element={<Navigate to="/tv/all" replace />} />
          <Route path="all" element={<Home />} />
          <Route path="most-popular" element={<Home />} />
          <Route path="new-to-store" element={<Home />} />
          <Route path="drama" element={<Home />} />
          <Route path="comedy" element={<Home />} />
          <Route path="kids" element={<Home />} />
        </Route>
        <Route path="/redeem-voucher" element={<RedeemVoucher />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
