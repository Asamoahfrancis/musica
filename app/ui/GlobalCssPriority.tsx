"use client";
import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
const GlobalCssPriority = ({ children }: { children: React.ReactNode }) => {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
};

export default GlobalCssPriority;
