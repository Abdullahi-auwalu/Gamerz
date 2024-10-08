import Banner from "@/components/Banner";
import MiniBanner from "@/components/MiniBanner";
import Tournaments from "@/components/Tournaments";
// import Image from "next/image";

export default function Home() {
  return (
    // <div className=" min-h-screen  font-[family-name:var(--font-geist-sans)]">
    //   Hello
    // </div>
    <div className="w-auto h-screen px-6 py-4">
      <Banner />
      {/* MINI BANNER */}
      <MiniBanner />
      <Tournaments />
    </div>
  );
}
