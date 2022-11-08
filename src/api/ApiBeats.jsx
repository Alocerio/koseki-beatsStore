export const GetBeats = async function () {
  const beats = await fetch("../beats.json");
  const response = await beats.json();
  console.log(response);
  return response;
};

export const beatsList = [
  {
    key: 1,
    name: "Timeless",
    bpm: 87,
    videoUrl: "6tiI9u7f8-U",
    tags: ["chill", "boombap", "low-bap"],
  },
  {
    key: 2,
    name: "Crime",
    bpm: 80,
    videoUrl: "zHehleec5dg",
    tags: ["dark", "boombap"],
  },
  {
    key: 3,
    name: "Low raiders",
    bpm: 84,
    videoUrl: "wWhmTRV5jW4",
    tags: ["drumless", "boombap", "west side sample"],
  },
];
