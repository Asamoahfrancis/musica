import React from "react";
import Image from "next/image";
const Ids = (params: { params: { id: string } }) => {
  console.log(params);
  return (
    <div className="  border-2 border-red-600">
      <div className="w-full h-72">
        <Image
          src="/2.jpg"
          alt="Picture of the author"
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "50% 0%",
            left: "0%",
            top: "1.5%",
          }}
        />
      </div>
    </div>
  );
};

export default Ids;
