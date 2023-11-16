import React from "react";
import Image from "next/image";
import { SiSpotify } from "react-icons/si";

const Ids = (params: { params: { id: string } }) => {
  console.log(params);
  return (
    <div className="">
      <div className="w-full top-0 h-96 left-0 -z-[1] absolute ">
        <Image
          src="/2.jpg"
          alt="Picture of the author"
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "50% 0%",
            left: "0%",
            top: "5%",
          }}
        />
      </div>
      <section className="flex flex-col  w-full h-full  z-100 ">
        <div className="flex-auto h-96 px-5  text-white">
          <div>
            <p>Playlist</p>
          </div>
          <div className="text-8xl my-5 font-bold md:text-4xl">
            Today&apos;s Top Hits
          </div>
          <div className="my-3 text-gray-300">
            Dua lipa is on top of the hottest 50!
          </div>
          <div className="flex text-xs items-center">
            <div className="text-green-500">
              <SiSpotify size="1.5rem" />
            </div>
            <div className="text-white ml-2 tracking-widest">
              <b>Sportify</b> . 34,465,513 likes . 50 songs, about 2 hr 45 min
            </div>
          </div>
        </div>
        <div className="flex-auto text-white ">
          necessitatibus quisquam sequi magnam ab quasi sed eos similique quo
          perspiciatis! Perferendis aspernatur quod qui deleniti, doloremque
          illo. Lorem ipsum dolor sit, amet consect similique quo perspiciatis!
          Perferendis aspernatur quod qui deleniti, doloremque illo. Lorem ipsum
          dolor sit, amet consectetur adipisicing necessitatibus quisquam sequi
          magnam ab quasi sed eos similique quo optio, ex ullam necessitatibus
          quisquam sequi magnam ab quasi sed eos similique quo perspiciatis!
          Perferendis aspernatur quod qui deleniti, doloremque illo. Lorem ipsum
          dolor sit, amet consectetur adipisicing necessitatibus quisquam sequi
          magnam ab quasi sed eos similique quo perspiciatis! Perferendis
          aspernatur quod qui deleniti, doloremque illo. si sed eos amet
          consectetur adipisicing elit. Voluptatibus optio, ex ullam
          necessitatibus quisquam sequi magnam ab quasi sed eos similique quo
          perspiciatis! Perferendis aspernatur quod qui deleniti, doloremque
          illo. sicing elit. Voluptatibus optio, ex ullam necessitatibus
          quisquam sequi magnam ab quasi sed eos similique quo perspiciatis!
          Perferendis aspernatur quod qui deleniti, doloremque illo.
        </div>
      </section>
    </div>
  );
};

export default Ids;
