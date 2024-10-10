import Image from "next/image";
import React from "react";

const DetailBanner = () => {
  return (
    <div>
      <div className="flex flex-col gap-4  w-full ">
        <div className="flex items-center justify-start">
          <Image src="/Left.png" alt="" width={20} height={20} />
          <h3 className=" font-bold text-sm ">Back</h3>
        </div>
        <div className="flex w-full h-[393px]">
          <Image
            src="/DetailBanner.png"
            alt=""
            width={1500}
            height={1500}
            className=" object-cover md:w-screen md:h-full object- md:object-cover"
          />
        </div>
        <div className="flex flex-col gap-5 mt-3">
          <h2 className="font-extrabold text-2xl">Call of duty</h2>
          <div className="flex items-center justify-center gap-1 w-[99px] h-[32px] bg-[#242424] rounded-lg">
            <Image src="/TrophyGold.png" alt="" width={20} height={20} />
            <span className="text-[#7E7F7F]">₦10,000</span>
          </div>
          <p className="text-[#7E7F7F] pr-4 leading-5 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className="flex gap-6 md:gap-10 flex-wrap">
          <div className="flex gap-1 items-center p-1">
            <Image src="/Calendar.png" alt="" width={30} height={30} />
            <span className="text-[#7E7F7F]">10 Feb 2023</span>
          </div>
          <div className="flex gap-1 items-center p-1">
            <Image src="/Calendar.png" alt="" width={30} height={30} />
            <span className="text-[#7E7F7F]">Free-to-play</span>
          </div>
          <div className="flex gap-1 items-center p-1">
            <Image src="/Calendar.png" alt="" width={30} height={30} />
            <span className="text-[#7E7F7F]">4v4</span>
          </div>
          <div className="flex gap-1 items-center p-1">
            <Image src="/Calendar.png" alt="" width={30} height={30} />
            <span className="text-[#7E7F7F]">10/48</span>
          </div>
        </div>
        <button className="flex items-center  justify-center bg-[#8BC72F] hover:bg-[#5a811f] gap-1 w-full md:w-[187px] h-[48px]">
          <Image src="/GamepadDark.png" alt="" width={25} height={25} />
          <span className="text-[#0A0A0A] text- font-extrabold">
            Join tournament
          </span>
        </button>
      </div>
    </div>
  );
};

export default DetailBanner;
