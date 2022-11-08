import React from "react";
import YoutubeEmbed from "./VideoYt.jsx";
const BeatCard = ({ key, name, videoUrl }) => {
  return (
    <li class="flex justify-center p-2 ">
      <div class="block p-6 rounded-lg hover:border-2 hover:shadow-2xl hover:cursor-pointer hover:border-secundary shadow-lg bg-white max-w-sm">
        <h5 class="text-gray-900 text-xl text-center  w-60 leading-tight font-medium mb-2">
          {name}
        </h5>
        <YoutubeEmbed videoUrl={videoUrl} />
        <p class="text-gray-700 text-base mb-4">Release date: {key}</p>
      </div>
    </li>
  );
};

export default BeatCard;
