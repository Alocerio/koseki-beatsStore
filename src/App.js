import { Fragment, useState } from "react";
import { useNavigate, NavigationType, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import Catalog from "../src/pages/Catalog.jsx";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/");
    });
  };
  return (
    <Fragment>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/beats" element={<Catalog />} />
        <Route
          path="/login"
          element={
            <Login
              isAuth={isAuth}
              setIsAuth={setIsAuth}
              signUserOut={signUserOut}
            />
          }
        />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
