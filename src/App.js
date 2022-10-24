import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
