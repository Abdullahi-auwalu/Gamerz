import Image from "next/image";

const FixturesTable = () => {
  return (
    <div className="mt-4 w-sreen overflow-y-auto lg:overflow-y-visible flex justify-start ">
      {/* LEFT */}
      <div className="flex ">
        {/* FIRST COLUMN */}
        <div className="flex flex-col gap-10">
          {/* TOP */}
          <div className="flex">
            <div className="flex flex-col gap-[4rem]">
              <div className="flex p-3 w-[134px] h-[32px] bg-[#3B3B3B] text-sm items-center justify-center">
                TBD
              </div>
              <div className="flex p-3 w-[134px] h-[32px] bg-[#3B3B3B] text-sm items-center justify-center">
                TBD
              </div>
            </div>
            <Image
              src="/leftLine.png"
              alt=""
              width={20}
              height={20}
              className="h-[100px] mt-4"
            />
          </div>

          {/* Down */}
          <div className="flex mt-6">
            <div className="flex flex-col gap-16">
              <div className="flex p-3 w-[134px] h-[32px] bg-[#3B3B3B] text-sm items-center justify-center">
                TBD
              </div>
              <div className="flex p-3 w-[134px] h-[32px] bg-[#3B3B3B] text-sm items-center justify-center">
                TBD
              </div>
            </div>
            <Image
              src="/leftLine.png"
              alt=""
              width={20}
              height={20}
              className="h-[100px] mt-4"
            />
          </div>
        </div>
        {/* SECOND COLUMN */}
        <div className="flex mt-[3.2rem]">
          <div className="flex flex-col gap-[10.3rem]">
            <div className="flex p-3 w-[134px] h-[32px] bg-[#3B3B3B] text-sm items-center justify-center">
              TBD
            </div>
            <div className="flex p-3 w-[134px] h-[32px] bg-[#3B3B3B] text-sm items-center justify-center">
              TBD
            </div>
          </div>
          <Image
            src="/leftLongLine.png"
            alt=""
            width={20}
            height={20}
            className="h-[12.5rem] mt-4"
          />
        </div>
        {/* THIRD COLUMN */}
        <div className="flex mt-[9.7rem] p-3 w-[134px] h-[32px] bg-[#3B3B3B] text-sm items-center justify-center">
          TBD
        </div>
      </div>

      {/* MIDDLE TROPHY */}
      <div className="flex flex-col items-center justify-center mt-[2rem]  gap-0 p-4">
        <h5 className="font-extrabold text-xl">Final</h5>
        <Image
          src="/finalTrophy.png"
          alt=""
          width={150}
          height={150}
          className="lg:h-[120px] h-[70px] -mt-2"
        />
      </div>

      {/* RIGHT */}
      <div className="flex  w-[]">
        {/* FIRST COLUMN */}
        <div className="flex mt-[9.7rem] md:p-3 w-[134px] h-[32px] bg-[#3B3B3B] text-sm items-center justify-center">
          TBD
        </div>
        {/* SECOND COLUMN */}
        <div className="flex mt-[3.2rem] ">
          <Image
            src="/rightLongLine.png"
            alt=""
            width={20}
            height={20}
            className="h-[12.5rem] mt-4"
          />
          <div className="flex flex-col gap-[10.3rem]">
            <div className="flex p-3 w-[134px] h-[32px] bg-[#3B3B3B] text-sm items-center justify-center">
              TBD
            </div>
            <div className="flex p-3 w-[134px] h-[32px] bg-[#3B3B3B] text-sm items-center justify-center">
              TBD
            </div>
          </div>
        </div>

        {/* THIRD COLUMN */}
        <div className="flex flex-col gap-10 -mr-5">
          {/* TOP */}
          <div className="flex">
            <Image
              src="/rightLine.png"
              alt=""
              width={20}
              height={20}
              className="h-[100px] mt-4"
            />
            <div className="flex flex-col gap-[4rem]">
              <div className="flex p-3 w-[134px] h-[32px] bg-[#3B3B3B] text-sm items-center justify-center">
                TBD
              </div>
              <div className="flex p-3 w-[134px] h-[32px] bg-[#3B3B3B] text-sm items-center justify-center">
                TBD
              </div>
            </div>
          </div>

          {/* Down */}
          <div className="flex mt-6">
            <Image
              src="/rightLine.png"
              alt=""
              width={20}
              height={20}
              className="h-[100px] mt-4"
            />
            <div className="flex flex-col gap-16">
              <div className="flex p-3 w-[134px] h-[32px] bg-[#3B3B3B] text-sm items-center justify-center">
                TBD
              </div>
              <div className="flex p-3 w-[134px] h-[32px] bg-[#3B3B3B] text-sm items-center justify-center">
                TBD
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixturesTable;
