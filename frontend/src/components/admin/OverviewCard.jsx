import React from "react";

const OverviewCard = ({ icon, cardTitle, cardAmount, className="", key }) => {
  return (
    <div className={`rounded-md py-8 bg-white flex flex-col items-center w-[12.5rem] ${className}`} key={key} >
      <span>{icon}</span>
      <p className="my-2">{cardTitle}</p>
      <p className="font-semibold text-xl">${cardAmount}</p>
    </div>
  );
};

export default OverviewCard;
