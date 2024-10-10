import Image from "next/image";
import React from "react";

interface Player {
  placement: number;
  player: string;
  gamesPlayed: number;
  wins: number;
  losses: number;
  wlRatio: string;
  points: number;
  image: string;
}

const playersData: Player[] = [
  {
    placement: 1,
    player: "Adebayo Oyeleye",
    gamesPlayed: 20,
    wins: 20,
    losses: 0,
    wlRatio: "100%",
    points: 49,
    image: "/Up.png",
  },
  {
    placement: 2,
    player: "iBROMOVIC109",
    gamesPlayed: 20,
    wins: 19,
    losses: 1,
    wlRatio: "98%",
    points: 47,
    image: "/Down1.png",
  },
  {
    placement: 3,
    player: "Drillz",
    gamesPlayed: 20,
    wins: 17,
    losses: 3,
    wlRatio: "92%",
    points: 46,
    image: "/Dash.png",
  },
  {
    placement: 4,
    player: "Bigbadderwolf",
    gamesPlayed: 20,
    wins: 12,
    losses: 8,
    wlRatio: "55%",
    points: 39,
    image: "/Up.png",
  },
  {
    placement: 5,
    player: "Pinky",
    gamesPlayed: 20,
    wins: 10,
    losses: 6,
    wlRatio: "50%",
    points: 34,
    image: "/Up.png",
  },
  {
    placement: 6,
    player: "demolaoflag",
    gamesPlayed: 20,
    wins: 8,
    losses: 14,
    wlRatio: "48%",
    points: 30,
    image: "/Down1.png",
  },
];

const PlayerTable = () => {
  return (
    <div className="w-full h-auto bg-[#1C1C1C]">
      <table className="w-[100%]">
        <thead>
          <tr className=" bg-[#2E2E2E] w-[100%]">
            <th className="w-[176px] h-[48px] p-4 sm:px-8 py-4 text-[#7E7F7F] font-semibold text-sm">
              Placement
            </th>
            <th className=" w-[176px] h-[48px] px-8 py-4 t text-[#7E7F7F] font-semibold text-sm">
              Player
            </th>
            <th className="w-[176px] h-[48px] px-8 py-4 text-[#7E7F7F] font-semibold text-sm">
              Games Played
            </th>
            <th className="w-[176px] h-[48px] px-8 py-4 text-[#7E7F7F] font-semibold text-sm hidden md:table-cell">
              Wins
            </th>
            <th className="w-[176px] h-[48px] px-8 py-4 text-[#7E7F7F] font-semibold text-sm hidden md:table-cell">
              Losses
            </th>
            <th className=" w-[176px] h-[48px] px-8 py-4 text-[#7E7F7F] font-semibold text-sm hidden md:table-cell">
              W/L Ratio
            </th>
            <th className="w-[176px] h-[48px] p-4 sm:px-8 py-4 text-[#7E7F7F] font-semibold text-sm">
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          {playersData.map((player) => (
            <tr key={player.placement} className="w-[100%]">
              <td className="flex items-center justify-center gap-3 w-[176px] h-[84px] px-8 py-4 text-lg ">
                <Image src={player.image} alt="" width={25} height={30} />
                <p>{player.placement}</p>
              </td>
              <td className="px-4 py-2 text-center w-[176px] h-[84px]">
                {player.player}
              </td>
              <td className=" px-4 py-2 w-[176px] h-[84px] text-center">
                {player.gamesPlayed}
              </td>
              <td className=" px-4 py-2 w-[176px] h-[84px] text-center hidden md:table-cell">
                {player.wins}
              </td>
              <td className="px-4 py-2 w-[176px] h-[84px] text-center hidden md:table-cell">
                {player.losses}
              </td>
              <td className=" px-4 py-2 w-[176px] h-[84px] text-center hidden md:table-cell">
                {player.wlRatio}
              </td>
              <td className="w-[176px] h-[84px] px-6 py-2 text-center">
                {player.points}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerTable;

// "use client";
// import Image from "next/image";
// import React, { useState } from "react";

// interface Player {
//   placement: number;
//   player: string;
//   gamesPlayed: number;
//   wins: number;
//   losses: number;
//   wlRatio: string;
//   points: number;
//   image: string;
// }

// const playersData: Player[] = [
//   {
//     placement: 1,
//     player: "Adebayo Oyeleye",
//     gamesPlayed: 20,
//     wins: 20,
//     losses: 0,
//     wlRatio: "100%",
//     points: 49,
//     image: "/Up.png",
//   },
//   {
//     placement: 2,
//     player: "iBROMOVIC109",
//     gamesPlayed: 20,
//     wins: 19,
//     losses: 1,
//     wlRatio: "98%",
//     points: 47,
//     image: "/Down1.png",
//   },
//   {
//     placement: 3,
//     player: "Drillz",
//     gamesPlayed: 20,
//     wins: 17,
//     losses: 3,
//     wlRatio: "92%",
//     points: 46,
//     image: "/Dash.png",
//   },
//   {
//     placement: 4,
//     player: "Bigbadderwolf",
//     gamesPlayed: 20,
//     wins: 12,
//     losses: 8,
//     wlRatio: "55%",
//     points: 39,
//     image: "/Up.png",
//   },
//   {
//     placement: 5,
//     player: "Pinky",
//     gamesPlayed: 20,
//     wins: 10,
//     losses: 6,
//     wlRatio: "50%",
//     points: 34,
//     image: "/Up.png",
//   },
//   {
//     placement: 6,
//     player: "demolaoflag",
//     gamesPlayed: 20,
//     wins: 8,
//     losses: 14,
//     wlRatio: "48%",
//     points: 30,
//     image: "/Down1.png",
//   },
// ];

// const PlayerTable = () => {
//   const [players, setPlayers] = useState(playersData);

//   const handleSort = (column: string): void => {
//     const sortedPlayers = [...players].sort((a, b) => {
//       if ((a[column] as number) < (b[column] as number)) {
//         return -1;
//       }
//       if ((a[column] as number) > (b[column] as number)) {
//         return 1;
//       }
//       return 0;
//     });
//     setPlayers(sortedPlayers);
//   };

//   return (
//     <div className="w-full h-auto bg-[#1C1C1C]">
//       <table className="w-[100%]">
//         <thead className=" w-full">
//           <tr className=" bg-[#2E2E2E] w-[100%]">
//             <th className="w-[176px] h-[48px] p-4 sm:px-8  py-4  text-[#7E7F7F]  font-semibold text-sm">
//               Placement
//             </th>
//             <th className=" w-[176px] h-[48px] px-8 py-4 t text-[#7E7F7F] font-semibold text-sm">
//               Player
//             </th>
//             <th className="w-[176px] h-[48px] px-8 py-4  text-[#7E7F7F] font-semibold text-sm">
//               Games Played
//             </th>
//             <th className="w-[176px]  h-[48px] px-8 py-4  text-[#7E7F7F] font-semibold text-sm hidden md:table-cell">
//               Wins
//             </th>
//             <th className="w-[176px]   h-[48px] px-8 py-4  text-[#7E7F7F] font-semibold text-sm hidden md:table-cell">
//               Losses
//             </th>
//             <th className=" w-[176px]  h-[48px] px-8 py-4  text-[#7E7F7F] font-semibold text-sm hidden md:table-cell">
//               W/L Ratio
//             </th>
//             <th className="w-[176px] h-[48px]  p-4 sm:px-8 py-4  text-[#7E7F7F] font-semibold text-sm">
//               Points
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {players.map((player) => (
//             <tr key={player.placement} className="w-[100%]">
//               <td className="flex items-center gap-3 w-[176px] h-[84px]  px-8 py-4  text-lg ">
//                 <Image src={player.image} alt="" width={25} height={30} />
//                 <p>{player.placement}</p>
//               </td>
//               <td className="px-4 py-2 text-center w-[176px] h-[84px]">
//                 {player.player}
//               </td>
//               <td className=" px-4 py-2 w-[176px] h-[84px] text-center">
//                 {player.gamesPlayed}
//               </td>
//               <td className=" px-4 py-2 w-[176px] h-[84px] text-center hidden md:table-cell">
//                 {player.wins}
//               </td>
//               <td className="px-4 py-2 w-[176px] h-[84px] text-center hidden md:table-cell">
//                 {player.losses}
//               </td>
//               <td className=" px-4 py-2 w-[176px] h-[84px] text-center hidden md:table-cell">
//                 {player.wlRatio.toFixed(2)}
//               </td>
//               <td className="w-[176px] h-[84px] px-6 py-2 text-center">
//                 {player.points}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PlayerTable;
