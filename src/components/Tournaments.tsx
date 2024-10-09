import Image from "next/image";
import React from "react";
import Cards from "./Cards";

const Tournaments = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* TOP */}
      <div className="flex items-center justify-between p-2">
        <h3 className="font-bold text-xl">Tournaments</h3>

        <div className="hidden md:flex items-center justify-center gap-2">
          <div className="flex items-center justify-between w-[138px] h-[40px] ">
            <Image src="/Sort.png" alt="" width={30} height={30} />
            <p className="text-sm">Sort by</p>
            <Image
              src="/Down.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-between w-[138px] h-[40px] ">
            <Image src="/Filter.png" alt="" width={30} height={30} />
            <p className="text-sm">Filter</p>
            <Image
              src="/Down.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center lg:justify-between gap-4 md:gap-1">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Tournaments;
