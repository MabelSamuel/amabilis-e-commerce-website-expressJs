import React from "react";
import { GrStatusGood } from "react-icons/gr";

const Success = ({ message }) => {
  return (
    <>
      {message && (
        <div className="fixed top-12 left-1/2 transform -translate-x-1/2 px-4 py-2 w-fit rounded shadow-lg z-[30000] flex justify-center items-center gap-2 border-gray-500 text-white bg-lilac sm:w-full ">
          <GrStatusGood className="text-white" />
          <p>{message}</p>
        </div>
      )}
    </>
  );
};

export default Success;
