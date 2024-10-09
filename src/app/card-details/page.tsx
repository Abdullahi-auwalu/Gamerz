import DetailBanner from "@/components/DetailBanner";
import PlayerTable from "@/components/PlayerTable";
import TournamentInfo from "@/components/TournamentInfo";

const page = () => {
  return (
    <div className="p-4">
      <DetailBanner />
      <TournamentInfo />
      <PlayerTable />
    </div>
  );
};

export default page;
