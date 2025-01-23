import React from "react";
import { v4 } from "uuid";
import { coreValues } from "@/lib/about-us";

function CoreValues() {
  return (
    <div className=" flex my-20 gap-8 px-3 sm:flex-col ">
      {coreValues.map((value) => (
        <div key={v4()} className=" basis-2/6 ">
          <h4 className=" font-medium text-2xl mb-4 ">{value.title}</h4>
          <p>{value.content}</p>
        </div>
      ))}
    </div>
  );
}

export default CoreValues;
