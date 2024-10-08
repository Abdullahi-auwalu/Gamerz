import Image from "next/image";
import React from "react";

const SideNav = () => {
  return (
    <div className="flex flex-col p-4 gap-2 w-[248px] h-[771px] bg-[#242424] justify-between">
      {/* TOP */}
      <div className=" w-[200px] h-[280px] pt-4 pl-2">
        <div className="flex gap-3 w-full bg-[#3B3B3B] p-2 cursor-pointer">
          <Image src="/Gamepad.png" alt="" width={30} height={30} />
          <p className="font-semibold text-lg">Tournaments</p>
        </div>
        <div className="flex gap-3 w-full p-2 hover:bg-[#3B3B3B] hover:cursor-pointer text-[#7E7F7F]">
          <Image src="/Leaderboard.png" alt="" width={30} height={30} />
          <p className="font-semibold text-lg">Leaderboards</p>
        </div>
        <div className="flex gap-3 w-full p-2 hover:bg-[#3B3B3B] hover:cursor-pointer text-[#7E7F7F]">
          <Image src="/Token3.png" alt="" width={30} height={30} />
          <p className="font-semibold text-lg">Token shop</p>
        </div>
        <div className="flex gap-3 w-full p-2 hover:bg-[#3B3B3B] hover:cursor-pointer text-[#7E7F7F]">
          <Image src="/Bet.png" alt="" width={30} height={30} />
          <p className="font-semibold text-lg">Live betting</p>
        </div>
        <div className="flex gap-3 w-full  p-2 hover:bg-[#3B3B3B] hover:cursor-pointer text-[#7E7F7F]">
          <Image src="/Video.png" alt="" width={30} height={30} />
          <p className="font-semibold text-lg">Content locker</p>
        </div>
        <div className="flex gap-3 w-full  p-2 hover:bg-[#3B3B3B] hover:cursor-pointer text-[#7E7F7F]">
          <Image src="/Community.png" alt="" width={30} height={30} />
          <p className="font-semibold text-lg">Community</p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="">
        <button className="flex items-center justify-start px-3 gap-4 bg-[#5F0A07] w-[200px] h-[56px]">
          <Image src="/Logout.png" alt="" width={30} height={30} />
          <p>LOG - OUT</p>
        </button>
      </div>
    </div>
  );
};

export default SideNav;
