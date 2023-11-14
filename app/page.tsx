import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";
export default function Home() {
  return (
    <main className="text-white  bg-zinc-900 p-4">
      <section className="flex justify-between">
        <p className="text-2xl">Spotify Playlists</p>
        <p className="text-xs tracking-widest ">Show all</p>
      </section>
      <section className="grid grid-cols-4 mt-5 gap-5">
        <section>
          <div>
            <div className="relative p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 ">
              <div className="absolute right-[12%] text-green-500   z-10 bottom-[35%] ">
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
        </section>
        <section>
          <div>
            <div className="relative p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 ">
              <div className="absolute right-[12%] text-green-500   z-10 bottom-[35%] ">
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
        </section>
        <section>
          <div>
            <div className="relative p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 ">
              <div className="absolute right-[12%] text-green-500   z-10 bottom-[35%] ">
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
        </section>
        <section>
          <div>
            <div className="relative p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 ">
              <div className="absolute right-[12%] text-green-500   z-10 bottom-[35%] ">
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
        </section>
        <section>
          <div>
            <div className="relative p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 ">
              <div className="absolute right-[12%] text-green-500   z-10 bottom-[35%] ">
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
        </section>
      </section>
    </main>
  );
}
