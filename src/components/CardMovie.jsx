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
      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Know more</button>
    </div>
  </li>
  )
}

export default CardMovie