"use client";
import React from "react";
import Image from "next/image";
import { MdLibraryMusic } from "react-icons/md";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Table from "@/app/ui/PlaylistTable/Table/Table";
import { PlayContext } from "@/app/context/Play";
import { useContext } from "react";
import AudioPlayer from "@/app/ui/Audiosystem/Audiosystem";
import PlayButton from "@/app/ui/PlayButton/PlayButton";
import PauseButton from "@/app/ui/PauseButton/PauseButton";

const Ids = (params: { params: { id: string } }) => {
  const ctx = useContext(PlayContext);
  return (
    <div className="">
      <div className="w-full top-0 h-80  left-0 -z-[1] absolute ">
        <Image
          src="/2.jpg"
          alt="Picture of the author"
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "50% 0%",
            left: "0%",
            top: "5%",
          }}
        />
      </div>
      <section className="flex flex-col  w-full h-full  z-100 ">
        <div className="flex-auto  px-5  text-white">
          <div>
            <p>Playlist</p>
          </div>
          <div className="text-8xl my-5 font-bold md:text-4xl">
            Today&apos;s Top Hits
          </div>
          <div className="my-3 text-gray-300">
            Dua lipa is on top of the hottest 50!
          </div>
          <div className="flex text-xs items-center">
            <div className="text-white">
              <MdLibraryMusic size="1.5rem" />
            </div>
            <div className="text-white ml-2 tracking-widest">
              <b>Musica</b> . 34,465,513 likes . 50 songs, about 2 hr 45 min
            </div>
          </div>
        </div>
        <div className="flex-auto text-white ">
          <section className="flex   bg-pink-900 py-6 rounded-lg  justify-between items-center">
            <div className=" flex gap-6 items-center">
              {ctx.playPause === false ? <PlayButton /> : <PauseButton />}
              <FavoriteBorderIcon
                className="text-white "
                sx={{ fontSize: 40 }}
              />
              <MoreHorizIcon sx={{ fontSize: 40 }} />
            </div>
            <div className="text-white  items-center gap-4 flex border-white">
              <p>List</p>
              <FormatListBulletedIcon sx={{ fontSize: 30 }} />
            </div>
          </section>
          <Table />
        </div>
      </section>
      <div className=" fixed z-50 left-0  bottom-0 w-[100%] ">
        <AudioPlayer />
      </div>
    </div>
  );
};

export default Ids;
