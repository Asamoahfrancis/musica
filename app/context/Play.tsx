"use client";
import React, { useRef, useState } from "react";

interface myContextType {
  isPlay: boolean;
  audioRef: HTMLAudioElement | any;
  playPauseToggle: (m: string) => void;
  playPause: boolean;
  setplaypause: (callback: (arg: boolean) => boolean) => void;
  mymusic: string;
  newPausePlay: () => void;
}
export const PlayContext = React.createContext<myContextType>({
  isPlay: false,
  audioRef: null,
  playPause: false,
  playPauseToggle: (m: string) => {},
  setplaypause: (callback: (arg: false) => boolean) => {},
  mymusic: "/resources/dualipa.mp3",
  newPausePlay: () => {},
});

const Play = ({ children }: { children: React.ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playPause, setplaypause] = useState<boolean>(false);
  const [mymusic, setmusic] = useState<string>("/resources/dualipa.mp3");

  const [isPlay, setPlay] = useState<boolean>(false);

  const playPauseToggle = (music: string) => {
    setmusic(music);
    audioRef.current!.load();

    if (audioRef.current?.paused) {
      audioRef.current!.play();
    } else {
      audioRef.current!.pause();
    }
  };

  const newPausePlay = () => {
    if (audioRef.current?.paused) {
      audioRef.current!.play();
    } else {
      audioRef.current!.pause();
    }
  };

  return (
    <PlayContext.Provider
      value={{
        isPlay,
        setplaypause,
        newPausePlay,
        playPause,
        mymusic,
        audioRef,
        playPauseToggle,
      }}
    >
      {children}
    </PlayContext.Provider>
  );
};

export default Play;
