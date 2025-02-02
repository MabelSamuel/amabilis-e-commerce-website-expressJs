import React from "react";

const OverviewCard = ({ icon, cardTitle, cardAmount, className="", key }) => {
  return (
    <div className={`rounded-md py-8 flex flex-col items-center w-1/5 min-w-48  ${className}`} key={key} >
      <span>{icon}</span>
      <p className="my-2 text-center">{cardTitle}</p>
      <p className="font-semibold text-xl">${cardAmount}</p>
    </div>
  );
};

export default OverviewCard;
