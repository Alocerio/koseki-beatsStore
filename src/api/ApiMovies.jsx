const MOVIES = "https://www.omdbapi.com/?i=tt3896198&apikey=4f85dd67&";

const GetMovies = async function () {
  const movies = await fetch(MOVIES);
  const moviesList = await movies.json();
  console.log(moviesList);
  return moviesList;
};

export default GetMovies;
