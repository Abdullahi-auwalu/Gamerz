import DetailBanner from "@/components/DetailBanner";
import FixturesTable from "@/components/FixturesTable";
import Pagination from "@/components/Pagination";
import TournamentInfo from "@/components/TournamentInfo";

const page = () => {
  return (
    <div className="p-4 lg:mr-[5rem]">
      <DetailBanner />
      <TournamentInfo />
      <div className="flex items-center justify-stretch lg:w-full">
        <FixturesTable />
      </div>
      <Pagination />
    </div>
  );
};

export default page;
