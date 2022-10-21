import React from 'react'

const CardMovie = ({movie}) => {
    const {Title, Year, Poster} = movie
  return (
   <li class="flex justify-center p-2">
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <h5 class="text-gray-900 text-xl  w-60 leading-tight font-medium mb-2">{Title}</h5>
      <img src={Poster} alt="" />
      <p class="text-gray-700 text-base mb-4">
      Release date: {Year}
      </p>
    </div>
  </li>
  )
}

export default CardMovie