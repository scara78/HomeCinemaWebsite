import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../../pages/Home";
import Watch from "../../pages/Watch";
import Search from "../../pages/Search";
import MoviePage from "../../pages/Movie";
import Play from "../../pages/Play";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/search" element={<Search />} />
          <Route path="/watch/:id" element={<MoviePage />} />
          <Route path="/watch/:id/play/:hash" element={<Play />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
