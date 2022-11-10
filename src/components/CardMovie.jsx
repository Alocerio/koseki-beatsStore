import React from "react";
import ReactAudioPlayer from "react-audio-player";
import beats from "../assets/audio/H98.wav";

const CardMovie = ({ movie }) => {
  const { Title, Year, Poster } = movie;
  return (
    <li className="flex justify-center p-2 ">
      <div className="block p-6 rounded-lg hover:border-2 hover:shadow-2xl hover:cursor-pointer hover:border-secundary shadow-lg bg-white max-w-sm">
        <h5 className="text-gray-900 text-xl  w-60 leading-tight font-medium mb-2">
          {Title}
        </h5>
        <img src={Poster} alt="" />
        <p className="text-gray-700 text-base mb-4">Release date: {Year}</p>
        <ReactAudioPlayer src={beats} loop controls />
      </div>
    </li>
  );
};

export default CardMovie;
