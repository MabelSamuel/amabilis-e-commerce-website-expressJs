import React from "react";

const OverviewRectangleCard = ({ key,icon, title, count, bgColor, textColor  }) => {
  return (
    <div key={key} className="bg-white w-64 rounded-md pl-7 flex items-center h-24 space-x-4">
      <div className={`size-12 rounded-full flex justify-center items-center bg-${bgColor} text-${textColor}`}>
        {icon}
      </div>
      <div>
        <p>{title}</p>
        <p className="font-semibold text-xl">{count}</p>
      </div>
    </div>
  );
};

export default OverviewRectangleCard;
