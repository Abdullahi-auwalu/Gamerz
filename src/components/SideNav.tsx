import Image from "next/image";
import Link from "next/link";

interface SideNavItem {
  title: string;
  icon: string;
  path: string;
}

const sideNavItems: SideNavItem[] = [
  { title: "Tournaments", icon: "/GamepadHash.png", path: "/" },
  { title: "Leaderboards", icon: "/Leaderboard.png", path: "/" },
  { title: "Token shop", icon: "/Token3.png", path: "/" },
  { title: "Live betting", icon: "/Bet.png", path: "/" },
  { title: "Content locker", icon: "/Video.png", path: "/" },
  { title: "Community", icon: "/Community.png", path: "/" },
];

const SideNav = () => {
  return (
    <div className="flex flex-col p-4 gap-2 h-[771px] bg-[#121212] border-r-gray-900 border-r-2 justify-between">
      {/* TOP */}
      <div className="w-[100%]  h-[280px] pt-4 pl-2">
        {sideNavItems.map((item) => (
          <Link
            href={item.path}
            key={item.title}
            className="flex gap-3  p-2 hover:bg-[#3B3B3B] hover:cursor-pointer text-[#7E7F7F]"
          >
            <Image src={item.icon} alt="" width={30} height={30} />
            <p className="font-semibold text-lg hidden lg:block">
              {item.title}
            </p>
          </Link>
        ))}
      </div>

      {/* BOTTOM */}
      <div className="">
        <button className="flex items-center justify-start px-3 gap-4 bg-[#5F0A07] w-[100%] h-[56px]">
          <Image src="/Logout.png" alt="" width={30} height={30} />
          <p className="hidden lg:block">LOG - OUT</p>
        </button>
      </div>
    </div>
  );
};

export default SideNav;
