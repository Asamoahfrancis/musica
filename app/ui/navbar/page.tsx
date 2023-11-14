import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
const Navbar = () => {
  return (
    <div className=" flex justify-between text-xs font-bold bg-zinc-800 rounded-md my-2">
      <section className="p-2 flex justify-center items-center gap-4">
        <p className="rounded-full p-3 bg-zinc-900 text-white">
          <SlArrowLeft size="1.5rem" />
        </p>
        <p className="rounded-full p-2  bg-zinc-900 text-white">
          <SlArrowRight size="1.5rem" />
        </p>
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
  );
};

export default Navbar;
