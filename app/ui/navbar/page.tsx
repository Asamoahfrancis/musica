"use client";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Inputsearch from "../search/inputsearch/page";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const currentPath = usePathname();
  return (
    <div
      className={`flex md:hidden justify-between text-xs sticky top-0 z-50  mt-4  font-bold  bg-pink-900/60 ${
        currentPath === "/" && "navbar"
      }   ${currentPath === "/" && "rounded-md"} p-3  my-2`}
    >
      <section className="p-2 flex justify-between items-center  w-96 gap-4">
        <div className="flex justify-center items-center">
          <p className="rounded-full p-2 bg-pink-900 text-white">
            <SlArrowLeft size="1rem" />
          </p>
          <p className="rounded-full p-2  bg-pink-900 text-white">
            <SlArrowRight size="1rem" />
          </p>
        </div>
        <NextUIProvider>
          {currentPath === "/search" && <Inputsearch />}
        </NextUIProvider>
      </section>
      <section className="flex gap-4 p-2 ">
        <button className="text-black bg-white tracking-widest py-1 px-5 border rounded-full">
          Sign up
        </button>
        <button className="text-black bg-white py-1 tracking-widest px-5 border rounded-full">
          Login in
        </button>
      </section>
    </div>
  );
};

export default Navbar;
