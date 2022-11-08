import React, { useState, useEffect } from "react";
import { beatsList } from "../api/ApiBeats";
import BeatCard from "../components/BeatCard";
const Catalog = () => {
  const [beats, setBeats] = useState(beatsList);

  useEffect(() => {}, []);
  return (
    <>
      <h1 className="text-center font-black text-5xl p-10">BEATS</h1>
      <div className="text-center p-5 flex flex-wrap justify-center">
        {beats.map((beat) => {
          const { key, name, videoUrl } = beat;
          return <BeatCard key={key} name={name} videoUrl={videoUrl} />;
        })}
      </div>
    </>
  );
};

export default Catalog;
