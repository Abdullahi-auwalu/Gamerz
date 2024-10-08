import Image from "next/image";

const TopNav = () => {
  return (
    <div className="w-full h-[100px] flex items-center justify-between p-4 border-b-2 border-gray-500 bg-[#121212]">
      <div className=" flex items-center justify-center gap-1">
        {/* LOGO */}
        {/* <Image src="/logo.png" alt="" width={20} height={20} />
        <span className="font-semibold text-2xl leading-3">GAMERZ</span> */}
        <Image src="/logo1.png" alt="" width={110} height={110} />
      </div>

      {/* SEARCH BAR */}
      <div className="hidden lg:flex items-center gap-1 text-xs ring-[1.5px] ring-[#1C1C1C] bg-[#1C1C1C] w-[569px] h-[48px] px-2">
        <Image src="/search.png" alt="search bar" width={25} height={25} />
        <input
          type="text"
          placeholder="Search tournament, player name or player tag"
          className="w-full p-2 bg-transparent outline-none text-[#7E7F7F] text-sm"
        />
      </div>
      {/* RIGHT HALF */}
      <div className="gap-2 w-[324px] h-[48px] flex items-center justify-end md:justify-between">
        <div className=" hidden md:flex items-center justify-center gap-3 w-[45px] h-[45px] rounded-full bg-[rgb(28,28,28)]">
          <Image src="/Bell.png" alt="" width={40} height={40} />
        </div>
        <div className=" items-center justify-center hidden md:flex">
          <Image src="/Token.png" alt="" width={20} height={20} />
          <span>20,0000</span>
        </div>

        <div className="flex gap-2 p-1">
          <div className="w-[48px] h-[48px] rounded-full bg-[#1C1C1C] flex items-center justify-center">
            <Image src="/User.png" alt="" width={30} height={30} />
          </div>
          <div className=" flex-col gap-1 ">
            <span className="text-sm">Akinnola Olalekan</span>
            <div className="flex items-center justify-between w-[72px] h-[20px] gap-2 bg-[#40610F] p-1">
              <p>Online</p>
              <Image src="/Vector.png" alt="" width={10} height={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
