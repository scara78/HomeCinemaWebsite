import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../../pages/Home";
import Watch from "../../pages/Watch";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch" element={<Watch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
