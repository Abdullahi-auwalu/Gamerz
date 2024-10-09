import React from "react";
import DetailBanner from "./DetailBanner";
import TournamentInfo from "./TournamentInfo";

const CardDetail = () => {
  return (
    <div>
      <div className="flex h-auto flex-col gap-3">
        <DetailBanner />
        <TournamentInfo />
      </div>
    </div>
  );
};

export default CardDetail;
