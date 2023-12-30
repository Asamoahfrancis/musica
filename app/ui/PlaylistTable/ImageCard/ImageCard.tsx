import React from "react";
import Image from "next/image";
const ImageCard = ({
  img,
  title,
  artist,
}: {
  img: string;
  title: string;
  artist: string;
}) => {
  return (
    <div className="flex gap-3 items-center">
      <section className="relative w-16 h-16">
        <Image
          src={img}
          fill
          alt="Picture of the author"
          className="rounded-md "
          style={{
            objectFit: "cover",
          }}
        />
      </section>
      <section>
        <h2>{title}</h2>
        <p className="text-sm text-gray-400">{artist}</p>
      </section>
    </div>
  );
};

export default ImageCard;
