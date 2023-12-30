import React from "react";
import ImageList from "../Tablerow/Tablerow";

const data = [
  {
    id: "1",
    music: "/resources/drake.mp3",
    img: "/4.jpeg",
    title: "Make my day",
    artist: "Drake",
    album: "SOS",
  },
  {
    id: "2",
    music: "/resources/dualipa.mp3",
    img: "/2.jpg",
    artist: "Dualipa",
    title: "Fake Friends",
    album: "Strangers",
  },
  {
    id: "3",
    music: "/resources/Suffer.mp3",
    img: "/3.webp",
    artist: "Charlie Puth",
    title: "My Life",
    album: "Lovers",
  },
  {
    id: "4",
    music: "/resources/party.mp3",
    img: "/1.jpg",
    artist: "Imagine Dragon",
    title: "Draw me closer",
    album: "Greedy",
  },
];

const Table = () => {
  return (
    <table className=" w-full bg-pink-900  ">
      <thead>
        <tr className="border-b-[1px] [&>th]:p-4  justify-between   border-solid border-white">
          <th className="text-left  w-10">#</th>
          <th className="text-left ">Title</th>
          <th className="">Album</th>
          <th className="">Date added</th>
          <th className="">pic</th>
        </tr>
      </thead>
      <tbody>
        {data.map((imagelist) => (
          <ImageList
            key={imagelist.id}
            music={imagelist.music}
            img={imagelist.img}
            id={imagelist.id}
            artist={imagelist.artist}
            title={imagelist.title}
            album={imagelist.album}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
