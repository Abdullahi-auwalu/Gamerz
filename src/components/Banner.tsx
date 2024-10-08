import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="w-auto bg-[#1C1C1C] p-10 flex  gap-20 lg:flex-row justify-between">
      {/* LEFT */}
      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-2xl">Setup your profile</h2>
        <p className="w-[200px] lg:w-auto">
          Complete your information to get access to tournaments and other
          premium features
        </p>
        <button className="w-[188px] h-[48px] gap-1 flex items-center justify-center p-2 bg-[#8BC72F]">
          <Image src="/UserB.png" alt="" width={30} height={30} />
          <p>Complete profile</p>
        </button>
      </div>

      {/* RIGHT */}
      <div className="">
        <Image src="/valorant.png" alt="" width={300} height={300} />
      </div>
    </div>
  );
};

export default Banner;
