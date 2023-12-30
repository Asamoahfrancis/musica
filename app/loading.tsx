"use client";
import { Box, LinearProgress } from "@mui/material";
import React, { useState, useEffect } from "react";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading && (
        <Box className="fixed top-0 left-0 w-full">
          <LinearProgress color="secondary" />
        </Box>
      )}
    </div>
  );
};
export default Loading;
