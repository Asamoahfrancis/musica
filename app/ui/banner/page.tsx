import React from "react";

const Banner = () => {
  return (
    <div className=" flex justify-between text-white py-3 md:text-xs  bg-gradient-to-r from-pink-500 to-purple-500 items-center">
      <section className="pl-4 md:w-[60%]">
        <p>Preview of Musica</p>
        <p>
          Sign up to get unlimited songs and podcasts with occassional adds. No
          credit card needed
        </p>
      </section>
      <section>
        <button className="rounded-full bg-white  -translate-x-2 px-6 py-2 font-bold   text-black">
          Sign up free
        </button>
      </section>
    </div>
  );
};

export default Banner;
