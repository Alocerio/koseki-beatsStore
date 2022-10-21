
import { Fragment, useEffect, useState } from 'react';
import MoviesList from './components/MoviesList';
import Search from './utils/Search';

const MOVIES = 'https://www.omdbapi.com/?i=tt3896198&apikey=4f85dd67&'

function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = async function(title) {
    const response = await fetch(`${MOVIES}&s=${title}`);
    const data = await response.json();
    
    setMovies(data.Search);
   
   
  };

  useEffect(()=>{
    searchMovies('superman');
  })
  return (
   <Fragment>
   
    <div className='text-center  justify-center'>
     <h1 className='text-4xl text-center font-bold p-5 underline'>OMDB MOVIES</h1>
     <Search/>
    </div>

   <div className='justify-center'>
    { movies?.length > 0 
    ? (
       <MoviesList movies={movies}/>
    ) : (
      <p>Empy</p>
    )
    }
    </div>
   </Fragment>
  );
}

export default App;
