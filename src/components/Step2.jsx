import React from "react";
import { gradientpurple, gradientgray } from "../utils/DesignTools";

function Step2() {
  return (
    <div className="mt-7 h-full flex justify-center">
      <div className="flex flex-row-reverse h-full w-3/4">
        <div className="flex flex-col">
          <h1
            className={`${gradientpurple} text-2xl p-2 flex justify-center text-white font-fredoka rounded-r-full`}
          >
            Step 2
          </h1>
          <div
            className={`flex justify-center items-center h-full ${gradientgray}`}
          >
            <p className="text-darkText text-lg p-4 text-center font-nunito ">
              Choose the
              <span className="text-purpleText font-extrabold mr-1">
                {" "}
                photo of the tripr
              </span>
              you want to{" "}
              <span className="text-purpleText font-extrabold">
                integrate
              </span>{" "}
              in the paradise
            </p>
          </div>
        </div>
        <img
          src="src/assets/thomas.png"
          alt="Photo-Thomas"
          className={`p-2 ${gradientpurple} w-1/2 object-cover rounded-tl-md rounded-bl-md`}
        />
      </div>
    </div>
  );
}

export default Step2;
