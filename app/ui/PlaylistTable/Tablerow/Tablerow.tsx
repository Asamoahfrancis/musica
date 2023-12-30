"use client";
import ImageCard from "../ImageCard/ImageCard";
import { PlayContext } from "@/app/context/Play";
import { useContext } from "react";
export default function Tablerow({
  img,
  music,
  id,
  artist,
  title,
  album,
}: {
  img: string;
  music: string;
  id: string;
  artist: string;
  title: string;
  album: string;
}) {
  const ctx = useContext(PlayContext);
  return (
    <tr
      className="py-4 px-2 [&>td]:p-4 hover:bg-pink-800 cursor-pointer"
      onClick={() => ctx.playPauseToggle(music)}
    >
      <td className="">{id}</td>
      <td className="">
        <ImageCard img={img} artist={artist} title={title} />
      </td>
      <td className=" text-center">{album}</td>
      <td className="text-center">Nov 26, 2023</td>
      <td className="text-center">2:28</td>
    </tr>
  );
}
