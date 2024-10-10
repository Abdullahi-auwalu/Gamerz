import Link from "next/link";
import React from "react";

const TournamentInfo = () => {
  return (
    <div className="mt-10 ">
      <h2 className="text-2xl font-extrabold ">Tournament information</h2>
      <div className="flex gap-4 py-6 mt-6">
        <Link href="">
          <button className=" bg-[#3B3B3B] py-3 px-6">
            <span className="text-sm font-semibold">Leaderboard</span>
          </button>
        </Link>
        <Link href="/fixtures">
          <button className="py-3 px-6 bg-[#141414] hover:bg-[#5d5c5c]">
            <span className="text-[#7E7F7F] text-sm font-semibold">
              Fixtures
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TournamentInfo;
