"use client";
import React from "react";
import { SlMagnifier } from "react-icons/sl";
import { BiLibrary } from "react-icons/bi";
import { MdLibraryMusic } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
const Sidebar = () => {
  const currentPath = usePathname();
  return (
    <div className="p-3 sticky top-0 bg-pink-950 min-h-screen">
      <section className="rounded-md bg-pink-900 md:p-2 md:flex md:items-center md:gap-4  text-white">
        <div className="flex gap-1 p-3 md:mr-auto">
          <Link href="/" className="text-white">
            <MdLibraryMusic size="1.5rem" />
          </Link>
          <Link href={"/"} className="text-white md:hidden">
            Musica
          </Link>
        </div>
        <div className="flex gap-4 p-3">
          <p
            className={`md:hidden ${
              currentPath == "/" ? "text-white" : "text-gray-400"
            }`}
          >
            <AiFillHome size="1.5rem" />
          </p>
          <Link
            href="/"
            className={`md:hidden ${
              currentPath == "/" ? "text-white" : "text-gray-400"
            }`}
          >
            Home
          </Link>
        </div>
        <div className="flex  text-gray-400 gap-4 p-3">
          <Link
            href={"/search"}
            className={`${
              currentPath == "/search" ? "text-white" : "text-gray-400"
            }`}
          >
            <SlMagnifier size="1.5rem" />
          </Link>
          <Link
            href={"/search"}
            className={`md:hidden ${
              currentPath == "/search" ? "text-white" : "text-gray-400"
            }`}
          >
            Search
          </Link>
        </div>
        <div className="hidden md:block text-black">
          <button className="bg-white py-2 px-6 font-bold rounded-full">
            Open App
          </button>
        </div>
        <div className="hidden md:block text-white">
          <GiHamburgerMenu size="1.5rem" />
        </div>
      </section>
      <section className="rounded-md md:hidden bg-pink-900 text-white">
        <div className="p-3 mt-3">
          <section className="flex py-3 text-gray-400 justify-between">
            <div className="flex gap-2">
              <p>
                <BiLibrary size="1.5rem" />
              </p>
              <p>Library</p>
            </div>
            <p>
              <FaPlus size="1.5rem" />
            </p>
          </section>
          <section>
            <aside className="  h-48 overflow-scroll">
              <div className="bg-pink-800 p-4 rounded-md my-2">
                <p className="py-3 font-bold">Create your first playlist</p>
                <p className="text-xs">It&apos;s easy, we&apos;ll help you</p>

                <button className="rounded-full mt-3 px-3 py-2 text-xs font-bold bg-white text-black">
                  Create List
                </button>
              </div>
              <div className="bg-pink-800 p-4 rounded-md my-2">
                <p className="py-3 text-sm font-bold">
                  Let&apos;s find some podcast to follow
                </p>
                <p className="text-xs">
                  we&apos;ll keep you updated on new episode
                </p>
                <button className="rounded-full mt-3 px-3 py-2 text-xs font-bold bg-white text-black">
                  Browse podcasts
                </button>
              </div>
            </aside>
          </section>
        </div>
        <div className="px-2 py-6 m-3">
          <section className="pb-4 text-gray-400">
            <ul className="flex flex-wrap gap-4 text-[10px]">
              <li>
                <Link href="/">Legal</Link>
              </li>
              <li>
                <Link href="/">Privacy Center</Link>
              </li>
              <li>
                <Link href="/">Privacy policy</Link>
              </li>
              <li>
                <Link href="/">About Ads</Link>
              </li>
              <li>
                <Link href="/">Accesssibilty</Link>
              </li>
              <li>
                <Link href="/">Cookies</Link>
              </li>
            </ul>
          </section>
          <section className="py-4">
            <button className="rounded-full flex gap-2 mt-3 px-4 items-center py-2 text-xs font-bold bg-black border text-white">
              <TbWorld size="1.5rem" /> English
            </button>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
