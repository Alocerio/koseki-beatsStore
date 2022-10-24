import { Fragment, useEffect, useState } from "react";

import MoviesList from "../components/MoviesList";
import Navbar from "../components/Navbar";

import Search from "../utils/Search";

const MOVIES = "https://www.omdbapi.com/?i=tt3896198&apikey=4f85dd67&";

function Header({ bottomRef }) {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async function (title) {
    const response = await fetch(`${MOVIES}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(search);
  });
  return (
    <Fragment>
      <Navbar></Navbar>
      <div id="Searching" className="text-center justify-center">
        <h1
          className="text-4xl text-center font-bold p-5
     underline bg-clip-text text-transparent bg-gradient-to-r
     from-bg to-white"
        >
          Catalog
        </h1>
        <Search
          searchMovies={searchMovies}
          search={search}
          setSearch={setSearch}
        />
      </div>
      <div className="justify-center">
        {movies?.length > 0 ? (
          <MoviesList movies={movies} />
        ) : (
          <p className="text-center p-12 font-semibold">
            Nothing to see now... (Type something 👆🏼)
          </p>
        )}
      </div>
    </Fragment>
  );
}

export default Header;
