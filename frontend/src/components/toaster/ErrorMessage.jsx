import React from "react";
import { TiCancel } from "react-icons/ti";

const ErrorMessage = ({ errorMessage }) => {
  return (
    <>
      {errorMessage && (
        <div className="fixed top-12 left-1/2 transform -translate-x-1/2 px-4 py-2 w-fit rounded shadow-lg z-[57] flex justify-center items-center gap-2 border-gray-500 text-white bg-red-400 sm:w-full ">
          <TiCancel className="text-white" />
          <p>{errorMessage}</p>
        </div>
      )}
    </>
  );
};

export default ErrorMessage;
