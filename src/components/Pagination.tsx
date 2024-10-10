import Image from "next/image";
import React from "react";

const Pagination = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[10rem]  ">
      <div className="flex w-[190px] gap-2 items-center justify-center overflow-hidden">
        <p className="text-lg">Quaterfinals</p>
        <p className="text-lg">Quaterfinals</p>
        <p className="text-lg">Semifinals</p>
      </div>
      <div className="flex p-4 items-center justify-between ">
        <button
          className="py-2 px-4 
     text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Image src="/LeftWhight.png" alt="" width={20} height={20} />
        </button>

        <div className="flex items-center gap-2 text-sm">
          <button className="w-[24px] h-[2px] bg-[#7E7F7F]"></button>
          <button className="w-[24px] h-[2px] bg-[#7E7F7F] "></button>
          <button className="w-[24px] h-[2px] bg-[#DBD9D9] "></button>
          <button className="w-[24px] h-[2px] bg-[#7E7F7F] "></button>
        </div>

        <button
          className="py-2 px-4
     text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Image src="/RightWhight.png" alt="" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
