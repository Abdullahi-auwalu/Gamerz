import Banner from "@/components/Banner";
import MiniBanner from "@/components/MiniBanner";
import Tournaments from "@/components/Tournaments";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="w-auto h-screen px-2 md:px-4 py-4">
      <Banner />
      <MiniBanner />
      <Tournaments />
    </div>
  );
}
