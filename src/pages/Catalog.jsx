import BeatCard from "../components/BeatCard";

const Catalog = ({ beats }) => {
  return (
    <>
      <h1 className="text-center bg-blur underline font-bold text-black text-5xl p-10">
        BEATS ON SALE
      </h1>
      <div className="text-center p-5 flex flex-wrap justify-center mb-36">
        {beats.map((beat) => {
          const { name, videoUrl, bpm } = beat;
          return <BeatCard name={name} videoUrl={videoUrl} bpm={bpm} />;
        })}
      </div>
    </>
  );
};

export default Catalog;
