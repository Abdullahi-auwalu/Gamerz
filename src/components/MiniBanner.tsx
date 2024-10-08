import Image from "next/image";
import React from "react";

const MiniBanner = () => {
  return (
    <div className="flex flex-col gap-2 w-[100%] md:flex-row lg:gap-5">
      {/* LEFT */}
      <div className="flex justify-between  bg-[#1C1C1C] mt-4 w-[100%] md:w-[50%] p-6 ">
        <div className="flex flex-col gap-4 w-[276px]">
          <h2 className="font-bold text-2xl">Countinue playing</h2>
          <p className="text-[#7E7F7F]">
            Start or resume tournaments you have registered for
          </p>
          <button className="flex gap-2 items-center mt-4">
            <Image src="/Play.png" alt="" width={20} height={20} />
            <p className="font-bold text-lg">Continue playing</p>
          </button>
        </div>

        {/* LEFT IMAGE */}
        <div className="">
          <Image
            src="/valorant.png"
            alt=""
            width={200}
            height={200}
            className="hidden lg:block"
          />
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex justify-between  bg-[#1C1C1C] mt-4 w-[100%] md:w-[50%] p-6 ">
        <div className="flex flex-col gap-4 w-[276px]">
          <h2 className="font-bold text-2xl">Quick match</h2>
          <p className="text-[#7E7F7F]">
            Create a tournament and invite friends to play
          </p>
          <button className="flex gap-2 items-center mt-4">
            <Image src="/Play.png" alt="" width={20} height={20} />
            <p className="font-bold text-lg">Let's go</p>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="">
          <Image
            src="/valorant.png"
            alt=""
            width={200}
            height={200}
            className="hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default MiniBanner;
