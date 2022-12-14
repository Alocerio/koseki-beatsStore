import { Fragment, useState, useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import Catalog from "../src/pages/Catalog.jsx";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import { signOut } from "firebase/auth";
import { db, auth } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

function App() {
  //new user States
  const [newName, setNewName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  //if auth states
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const userCollectionRef = collection(db, "users");
  const beatsCollectionRef = collection(db, "beats");
  const [beats, setBeats] = useState([]);

  useEffect(() => {
    const getBeats = async () => {
      const data = await getDocs(beatsCollectionRef);
      setBeats(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBeats();
  }, []);

  const createUser = async () => {
    await addDoc(userCollectionRef, { name: newName, password: newPassword });
    localStorage.setItem("isAuth", true);
    setIsAuth(true);
    navigate("/");
  };
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
        <Route path="/beats" element={<Catalog beats={beats} />} />
        <Route
          path="/login"
          element={
            <Login
              setNewName={setNewName}
              setNewPassword={setNewPassword}
              createUser={createUser}
              isAuth={isAuth}
              setIsAuth={setIsAuth}
              signUserOut={signUserOut}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              setNewName={setNewName}
              setNewPassword={setNewPassword}
              createUser={createUser}
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
