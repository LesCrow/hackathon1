import React from "react";
import { gradientgray, gradientpurple } from "../utils/DesignTools";

function Step() {
  return (
    <div className="flex justify-center h-full mt-6">
      <div className="flex w-3/4 ">
        <div className="flex flex-col text-center w-9/12 h-full">
          <h1
            className={`${gradientpurple} font-fredoka rounded-tl-xl rounded-bl-xl text-white`}
          >
            Step 1
          </h1>
          <p
            className={`h-full font-nunito ${gradientgray} text-darkText text-xs p-3`}
          >
            Research the{" "}
            <span className="text-purpleText font-extrabold">paradise</span> you
            want to{" "}
            <span className="text-purpleText font-extrabold">be in</span>
          </p>
        </div>
        <div
          className={`flex items-center justify-center w-full h-full ${gradientpurple} rounded-tr-md rounded-br-md`}
        >
          <img
            src="src/assets/maldives.png"
            alt="Maldives"
            className={`p-2 ${gradientpurple} h-full object-cover rounded-lg`}
          />
        </div>
      </div>
    </div>
  );
}

export default Step;
