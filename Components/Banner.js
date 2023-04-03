import React from "react";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[800px]">
      <Image
        src="https://links.papareact.com/0fm"
        alt=""
        fill
        style={{
          layout: "fill",
          objectFit: "cover",
        }}
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg md:text-2xl"><b>Not sure where to go? Perfect.</b></p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 cursor-pointer hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
      </div>
    </div>
  );
}
