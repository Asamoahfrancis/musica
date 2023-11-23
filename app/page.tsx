"use client";
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";
import Link from "next/link";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="text-white bg-pink-900 p-4">
        <section className="flex justify-between">
          <p className="text-2xl">Musica Playlists</p>
          <p className="text-xs tracking-widest ">Show all</p>
        </section>
        <section className=" grid grid-cols-4 md:grid-cols-2 mt-5 gap-5">
          <Link href={"/playlist/1020"}>
            <div>
              <div className="relative p-4 rounded-xl group bg-pink-800 hover:bg-pink-700 duration-700 ">
                <div className="absolute right-[12%] text-green-500  duration-100 invisible group-hover:visible hover:scale-110  z-10 bottom-[35%] ">
                  <FaCirclePlay size="3rem" />
                </div>
                <aside className="relative h-52">
                  <Image
                    src="/4.jpeg"
                    fill={true}
                    alt="Picture of the author"
                    className="rounded-lg"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </aside>
                <aside className="text-sm py-2">
                  <p className="font-bold">Today&apos;s Top Hits</p>
                  <p className="text-xs py-2">
                    Dua Lipa is on top of the Hottest 50!
                  </p>
                </aside>
              </div>
            </div>
          </Link>

          <Link href={"/playlist/3020"}>
            <div>
              <div className="relative p-4 rounded-xl group bg-pink-800 hover:bg-pink-700 duration-700 ">
                <div className="absolute right-[12%] text-green-500  duration-100 invisible group-hover:visible hover:scale-110  z-10 bottom-[35%] ">
                  <FaCirclePlay size="3rem" />
                </div>
                <aside className="relative h-52">
                  <Image
                    src="/2.jpg"
                    fill={true}
                    alt="Picture of the author"
                    className="rounded-lg"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </aside>
                <aside className="text-sm py-2">
                  <p className="font-bold">Today&apos;s Top Hits</p>
                  <p className="text-xs py-2">
                    Dua Lipa is on top of the Hottest 50!
                  </p>
                </aside>
              </div>
            </div>
          </Link>

          <Link href={"/playlist/6040"}>
            <div>
              <div className="relative p-4 rounded-xl group bg-pink-800 hover:bg-pink-700 duration-700 ">
                <div className="absolute right-[12%] text-green-500  duration-100 invisible group-hover:visible hover:scale-110  z-10 bottom-[35%] ">
                  <FaCirclePlay size="3rem" />
                </div>
                <aside className="relative h-52">
                  <Image
                    src="/3.webp"
                    fill={true}
                    alt="Picture of the author"
                    className="rounded-lg"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </aside>
                <aside className="text-sm py-2">
                  <p className="font-bold">Today&apos;s Top Hits</p>
                  <p className="text-xs py-2">
                    Dua Lipa is on top of the Hottest 50!
                  </p>
                </aside>
              </div>
            </div>
          </Link>

          <Link href={"/playlist/8463"}>
            <div>
              <div className="relative p-4 rounded-xl group bg-pink-800 hover:bg-pink-700 duration-700 ">
                <div className="absolute right-[12%] text-green-500  duration-100 invisible group-hover:visible hover:scale-110  z-10 bottom-[35%] ">
                  <FaCirclePlay size="3rem" />
                </div>
                <aside className="relative h-52">
                  <Image
                    src="/1.jpg"
                    fill={true}
                    alt="Picture of the author"
                    className="rounded-lg"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </aside>
                <aside className="text-sm py-2">
                  <p className="font-bold">Today&apos;s Top Hits</p>
                  <p className="text-xs py-2">
                    Dua Lipa is on top of the Hottest 50!
                  </p>
                </aside>
              </div>
            </div>
          </Link>
        </section>
      </main>
    </NextUIProvider>
  );
}
