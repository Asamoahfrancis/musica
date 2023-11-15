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
    <NextUIProvider>
      <div className=" flex justify-between text-xs sticky top-0  z-40 font-bold bg-zinc-900 p-3 rounded-md my-2">
        <section className="p-2 flex justify-between items-center  w-96 gap-4">
          <div className="flex justify-center items-center">
            <p className="rounded-full p-2 bg-zinc-900 text-white">
              <SlArrowLeft size="1rem" />
            </p>
            <p className="rounded-full p-2  bg-zinc-900 text-white">
              <SlArrowRight size="1rem" />
            </p>
          </div>
          {currentPath === "/search" && <Inputsearch />}
        </section>
        <section className="flex gap-4 p-2">
          <button className="text-black bg-white tracking-widest py-1 px-5 border rounded-full">
            Sign up
          </button>
          <button className="text-black bg-white py-1 tracking-widest px-5 border rounded-full">
            Login in
          </button>
        </section>
      </div>
    </NextUIProvider>
  );
};

export default Navbar;
