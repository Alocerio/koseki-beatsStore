import React, { useState, useEffect } from "react";
import { beatsList } from "../api/ApiBeats";
import BeatCard from "../components/BeatCard";
import Navbar from "../components/Navbar";
const Catalog = () => {
  const [beats, setBeats] = useState(beatsList);

  useEffect(() => {}, []);
  return (
    <>
      <h1 className="text-center bg-blur underline font-bold text-black text-5xl p-10">
        BEATS ON SALE
      </h1>
      <div className="text-center p-5 flex flex-wrap justify-center mb-36">
        {beats.map((beat) => {
          const { id, name, videoUrl, tags, bpm } = beat;
          return (
            <BeatCard
              key={id}
              id={id}
              name={name}
              videoUrl={videoUrl}
              tags={tags}
              bpm={bpm}
            />
          );
        })}
      </div>
    </>
  );
};

export default Catalog;
