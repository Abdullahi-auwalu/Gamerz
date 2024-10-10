"use client";
import React, { useState } from "react";
import Link from "next/link";

// interface ButtonProps {
//   className: string;
//   onClick: () => void;
//   children: React.ReactNode;
// }

const TournamentInfo = () => {
  const [isLeaderboardActive, setIsLeaderboardActive] = useState<boolean>(true);
  const [isFixturesActive, setIsFixturesActive] = useState<boolean>(false);

  const handleLeaderboardClick = () => {
    setIsLeaderboardActive(true);
    setIsFixturesActive(false);
  };

  const handleFixturesClick = () => {
    setIsLeaderboardActive(false);
    setIsFixturesActive(true);
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-extrabold">Tournament Information</h2>
      <div className="flex gap-4 py-6 mt-6">
        <Link href="/card-details">
          <button
            className={`bg-[#141414] py-3 px-6 ${
              isLeaderboardActive ? "bg-[#3B3B3B] text-white" : "text-[#7E7F7F]"
            }`}
            onClick={handleLeaderboardClick}
          >
            <span className="text-sm font-semibold">Leaderboard</span>
          </button>
        </Link>
        <Link href="/fixtures">
          <button
            className={`py-3 px-6 bg-[#141414] hover: ${
              isFixturesActive ? "text-white bg-[#3B3B3B]" : "text-white "
            }`}
            onClick={handleFixturesClick}
          >
            <span className="text-sm font-semibold">Fixtures</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TournamentInfo;

// import Link from "next/link";
// import React from "react";

// const TournamentInfo = () => {
//   return (
//     <div className="mt-10 ">
//       <h2 className="text-2xl font-extrabold ">Tournament information</h2>
//       <div className="flex gap-4 py-6 mt-6">
//         <Link href="">
//           <button className=" bg-[#3B3B3B] py-3 px-6">
//             <span className="text-sm font-semibold">Leaderboard</span>
//           </button>
//         </Link>
//         <Link href="/fixtures">
//           <button className="py-3 px-6 bg-[#141414] hover:bg-[#5d5c5c]">
//             <span className="text-[#7E7F7F] text-sm font-semibold">
//               Fixtures
//             </span>
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default TournamentInfo;
