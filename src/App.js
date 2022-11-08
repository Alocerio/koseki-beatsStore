import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import Hero from "./components/Hero.jsx";
import Catalog from "../src/pages/Catalog.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/beats" element={<Catalog />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
