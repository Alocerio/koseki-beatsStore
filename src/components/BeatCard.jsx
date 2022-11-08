import React from "react";
import YoutubeEmbed from "./VideoYt.jsx";
const BeatCard = ({ id, name, videoUrl, tags }) => {
  return (
    <li key={id} className="flex justify-center p-2 ">
      <div className="block p-6 rounded-lg hover:border-2 hover:shadow-2xl hover:cursor-pointer hover:border-secundary shadow-lg bg-white max-w-sm">
        <h5 className="text-gray-900 text-xl text-center  w-60 leading-tight font-medium mb-2">
          {name}
        </h5>
        <YoutubeEmbed videoUrl={videoUrl} />
        <p className="text-gray-700 p-2">
          Tags:{""}
          {tags.map((t) => (
            <span> {t} </span>
          ))}
        </p>
        <button
          type="button"
          className="border rounded  py-1 px-5 text-center inline-block shadow-lg hover:text-white hover:bg-black "
        >
          Go to buy
        </button>
      </div>
    </li>
  );
};

export default BeatCard;
