import React from "react";
import { SlMagnifier } from "react-icons/sl";
import { BiLibrary } from "react-icons/bi";
import { SiSpotify } from "react-icons/si";
import { FaPlus } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
const menuItems = [
  {
    title: "homepages",
    list: [
      {
        title: "Spotify",
        path: "/",
        icon: <SiSpotify />,
      },
      {
        title: "Home",
        path: "/",
        icon: <AiFillHome />,
      },
      {
        title: "Search",
        path: "/search",
        icon: <SlMagnifier />,
      },
    ],
  },
  {
    title: "librarypages",
    list: [
      {
        title: "Your Library",
        path: "",
        icon: <BiLibrary />,
      },
      {
        title: "plus",
        path: "/playlist",
        icon: <FaPlus />,
      },
      {
        title: "Podcast",
        path: "/podcast",
        icon: <SiSpotify />,
      },
    ],
  },
];
const Sidebar = () => {
  return (
    <div className="p-2 sticky top-0 bg-zinc-950">
      <section className="rounded-md bg-zinc-900  text-white">
        <div className="flex gap-1 p-2">
          <p>
            <SiSpotify size="1.5rem" />
          </p>
          <p>Sportify</p>
        </div>
        <div className="flex gap-4 p-2">
          <p>
            <AiFillHome size="1.5rem" />
          </p>
          <p>Home</p>
        </div>
        <div className="flex  text-gray-400 gap-4 p-2">
          <p>
            <SlMagnifier size="1.5rem" />
          </p>
          <p>Search</p>
        </div>
      </section>
      <section className="rounded-md bg-zinc-900 text-white">
        <div className="p-2 mt-3">
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
              <div className="bg-zinc-800 p-3 rounded-md my-2">
                <p className="py-3 font-bold">Create your first playlist</p>
                <p className="text-xs">It&apos;s easy, we&apos;ll help you</p>

                <button className="rounded-full mt-3 px-3 py-2 text-xs font-bold bg-white text-black">
                  Create List
                </button>
              </div>
              <div className="bg-zinc-800 p-3 rounded-md my-2">
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
        <div className="px-2 py-3 m-3">
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
