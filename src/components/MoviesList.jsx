import React from 'react'
import CardMovie from './CardMovie';
const MoviesList = ({movies}) => {
  return (
    <ul className='p-5 flex flex-wrap justify-center '>
        {
            movies.map((movie) => (
             <CardMovie key={movie.imdbID} movie={movie}/>
            ))
        }
    </ul>
  )
}

export default MoviesList