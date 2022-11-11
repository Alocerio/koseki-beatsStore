import React from "react";
import YoutubeEmbed from "./VideoYt.jsx";
const BeatCard = ({ name, videoUrl, bpm, price }) => {
  const handleClick = () => {
    return alert(
      "Unfortunately to buy is not available right now, We apologies"
    );
  };
  return (
    <li className="flex justify-center p-2 ">
      <div className="block p-6 rounded-lg hover:border-2 hover:shadow-2xl hover:cursor-pointer hover:border-secundary shadow-lg bg-white max-w-sm">
        <h5 className="text-gray-900 text-xl text-center  w-60 leading-tight font-medium mb-2">
          {name}
        </h5>
        <YoutubeEmbed videoUrl={videoUrl} />
        <div>
          {bpm ? <p>BPM: {bpm}</p> : ""}
          {price ? (
            <p className="text-gray-700 text-base p-1 mb-4">Price: ${price}</p>
          ) : (
            ""
          )}
        </div>

        <button
          type="button"
          className="border mt-2 rounded  py-1 px-5 text-center inline-block shadow-lg hover:text-white hover:bg-black "
          onClick={handleClick}
        >
          I'm interested
        </button>
      </div>
    </li>
  );
};

export default BeatCard;
