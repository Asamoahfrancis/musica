"use client";
import React, { useContext } from "react";
import { PlayContext } from "@/app/context/Play";

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer = () => {
  const ctx = useContext(PlayContext);
  console.log("this is form audio", ctx.mymusic);
  return (
    <div>
      <audio ref={ctx.audioRef} controls className={`w-full`}>
        <source src={ctx.mymusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
