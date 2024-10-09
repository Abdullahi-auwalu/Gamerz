import Image from "next/image";
import Link from "next/link";

const Cards = () => {
  return (
    <div className="flex flex-col gap-1 p-2 h-[530px] w-auto md:w-[300px] xl:w-[320px]">
      <div className="h-[167px] flex items-center justify-center bg-cover">
        <Image
          src="/cardImage.png"
          alt=""
          width={600}
          height={600}
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col p-2 bg-[#1C1C1C] h-auto">
        <h2 className="text-2xl p-1">Call of duty</h2>
        <div className="flex gap-6">
          <div className="flex flex-col mt-2">
            <div className="flex gap-1 items-center p-1">
              <Image src="/Calendar.png" alt="" width={30} height={30} />
              <span className="text-[#7E7F7F]">10 Feb 2023</span>
            </div>
            <div className="flex gap-1 items-center p-1">
              <Image src="/Calendar.png" alt="" width={30} height={30} />
              <span className="text-[#7E7F7F]">4v4</span>
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <div className="flex gap-1 items-center p-1">
              <Image src="/Calendar.png" alt="" width={30} height={30} />
              <span className="text-[#7E7F7F]">Free-to-play</span>
            </div>
            <div className="flex gap-1 items-center p-1">
              <Image src="/Calendar.png" alt="" width={30} height={30} />
              <span className="text-[#7E7F7F]">10/48</span>
            </div>
          </div>
        </div>
        <div className="flex w-[115px] h-[32px] bg-[#242424] rounded-lg py-4 gap-1 px-6 items-center justify-center mt-3">
          <Image src="/TrophyIcon.png" alt="" width={30} height={30} />
          <span className="text-[#7E7F7F]">₦10,000</span>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <button className="flex items-center justify-center bg-[#8BC72F] hover:bg-[#5a811f] gap-1 w-full h-[48px]">
            <Image src="/GamepadDark.png" alt="" width={25} height={25} />
            <span className="text-[#0A0A0A] text- font-extrabold">
              Join tournament
            </span>
          </button>
          <Link href="/card-details">
            <button className="flex items-center justify-center bg-transparent gap-1 w-full h-[48px] border-2 border-gray-600 cursor-pointer hover:bg-gray-600">
              <Image src="/GamepadLight.png" alt="" width={25} height={25} />
              <span className="text-[#ffffff] text- font-bold">
                View details
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;

// import Image from "next/image";

// const Cards = () => {
//   return (
//     <div className="flex flex-col gap-1 p-2  h-[530px]">
//       <div className=" h-[167px] flex items-center justify-center bg-cover">
//         <Image
//           src="/cardImage.png"
//           alt=""
//           width={600}
//           height={600}
//           className="w-full h-full "
//         />
//       </div>
//       <div className="flex flex-col p-2 bg-[#1C1C1C]  h-auto">
//         <h2 className="text-2xl p-1">Call of duty</h2>
//         <div className="flex gap-6 ">
//           <div className="flex flex-col mt-2">
//             <div className="flex gap-1 items-center  p-1">
//               <Image src="/Calendar.png" alt="" width={30} height={30} />
//               <span className="text-[#7E7F7F]">10 Feb 2023</span>
//             </div>
//             <div className="flex gap-1 items-center  p-1">
//               <Image src="/Calendar.png" alt="" width={30} height={30} />
//               <span className="text-[#7E7F7F]">4v4</span>
//             </div>
//           </div>
//           <div className="flex flex-col mt-2">
//             <div className="flex gap-1 items-center  p-1">
//               <Image src="/Calendar.png" alt="" width={30} height={30} />
//               <span className="text-[#7E7F7F]">Free-to-play</span>
//             </div>
//             <div className="flex gap-1 items-center  p-1">
//               <Image src="/Calendar.png" alt="" width={30} height={30} />
//               <span className="text-[#7E7F7F]">10/48</span>
//             </div>
//           </div>
//         </div>
//         <div className="flex w-[115px] h-[32px] bg-[#242424] rounded-lg py-4 gap-1 px6  items-center justify-center mt-3">
//           <Image src="/TrophyIcon.png" alt="" width={30} height={30} />
//           <span className="text-[#7E7F7F]">₦10,000</span>
//         </div>
//         <div className="flex flex-col gap-2 mt-2">
//           <button className="flex items-center justify-center bg-[#8BC72F] gap-1 w-full h-[48px]">
//             <Image src="/GamepadDark.png" alt="" width={25} height={25} />
//             <span className="text-[#0A0A0A] text- font-extrabold">
//               Join tournament
//             </span>
//           </button>
//           <button className="flex items-center justify-center bg-transparent gap-1 w-full h-[48px] border-2 border-gray-600">
//             <Image src="/GamepadLight.png" alt="" width={25} height={25} />
//             <span className="text-[#ffffff] text- font-bold">View details</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;
