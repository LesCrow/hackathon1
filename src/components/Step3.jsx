import React from "react";
import { gradientgray, gradientpurple } from "../utils/DesignTools";

function Step3() {
  return (
    <div className="flex justify-center h-full mt-6">
      <div className="flex w-3/4 ">
        <div className="flex flex-col text-center w-9/12 h-full">
          <h1
            className={`${gradientpurple} p-2 font-fredoka rounded-l-full text-white`}
          >
            Step 3
          </h1>
          <div
            className={`h-full ${gradientgray} flex justify-center items-center`}
          >
            <p className={`font-nunito  text-darkText text-lg p-4`}>
              EcoTripr
              <span className="text-purpleText font-extrabold">remove</span> the
              background and you just have to
              <span className="text-purpleText ml-1 font-extrabold">
                place the tripr
              </span>
            </p>
          </div>
        </div>
        <div
          className={`flex items-center justify-center w-full h-full ${gradientpurple} rounded-tr-md rounded-br-md`}
        >
          <img
            src="src/assets/maldives.png"
            alt=""
            className={`p-2 ${gradientpurple} h-full object-cover rounded-lg`}
          />
        </div>
      </div>
    </div>
  );
}

export default Step3;
