import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="text-white bg-pink-900 pb-40  pt-20 text-xs ">
      <div className="grid gap-8 grid-cols-4">
        <section className="flex flex-col items-start p-4  [&>p]:p-2">
          <p className=" font-bold">Company</p>
          <p className="text-sm">About</p>
          <p className="text-sm">jobs</p>
          <p className="text-sm">For the Record</p>
        </section>
        <section className="flex flex-col items-start [&>p]:p-2">
          <p className=" font-bold">Communities</p>
          <p>For Artists </p>
          <p>Developers</p>
          <p>Advertising</p>
          <p>Investors</p>
          <p>Vendors</p>
        </section>
        <section className="flex flex-col items-start [&>p]:p-2">
          <p className=" font-bold">Useful Links</p>
          <p>For Support </p>
          <p>Free mobile App</p>
        </section>
        <section className="flex gap-4 md:flex-wrap  items-start">
          <p className=" hover:bg-pink-700 bg-pink-800 rounded-full p-2">
            <IoLogoInstagram size="1.5em" />
          </p>
          <p className=" hover:bg-pink-700 bg-pink-800 rounded-full p-2">
            <FaTwitter size="1.5em" />
          </p>
          <p className=" hover:bg-pink-700 bg-pink-800 rounded-full p-2">
            <FaFacebook size="1.5em" />
          </p>
        </section>
      </div>
      <div>
        <p className="w-[90%] h-[2px] bg-pink-800  m-3 "></p>
      </div>
      <div>
        <p className=" px-4 text-xs py-4 text-gray-300">
          &copy; 2023 Spotify AB
        </p>
      </div>
    </div>
  );
};

export default Footer;
