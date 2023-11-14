import React from "react";

const Footer = () => {
  return (
    <div className=" flex justify-between text-white  bg-gradient-to-r from-pink-500 to-purple-500 items-center p-3 ">
      <section>
        <p>Preview of Spotify</p>
        <p>
          Sign up to get unlimited songs and podcasts with occassional adds. No
          credit card needed
        </p>
      </section>
      <section>
        <button className="rounded-full bg-white  font-bold px-6 py-3.5  text-black">
          Sign up free
        </button>
      </section>
    </div>
  );
};

export default Footer;
