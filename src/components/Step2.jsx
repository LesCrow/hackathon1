import React from "react";
import { gradientpurple, gradientgray } from "../utils/DesignTools";

function Step2() {
  return (
    <div className="mt-7 h-full flex justify-center">
      <div className="flex flex-row-reverse h-full w-3/4">
        <div className="flex flex-col">
          <h1
            className={`${gradientpurple} flex justify-center text-white font-fredoka rounded-tr-xl rounded-br-xl`}
          >
            Step 2
          </h1>
          <div
            className={`flex justify-center items-center h-full ${gradientgray}`}
          >
            <p className="text-darkText text-center font-nunito text-xs p-2">
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
