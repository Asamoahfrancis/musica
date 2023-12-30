import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useContext } from "react";
import { PlayContext } from "@/app/context/Play";
import PauseIcon from "@mui/icons-material/Pause";

const PauseButton = () => {
  const [playPause, setplaypause] = useState<boolean>(false);

  const ctx = useContext(PlayContext);
  return (
    <IconButton
      onClick={() => {
        ctx.setplaypause((prev: boolean) => !prev);
        ctx.newPausePlay();
      }}
    >
      <PauseIcon sx={{ fontSize: 60 }} className="hover:text-pink-800" />
    </IconButton>
  );
};

export default PauseButton;
