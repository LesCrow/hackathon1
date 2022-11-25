import React from "react";
import { gradientgray, gradientpurple } from "../utils/DesignTools";

function Step() {
  return (
    <div className="flex justify-center h-full mt-6">
      <div className="flex w-3/4 ">
        <div className="flex flex-col text-center w-9/12 h-full">
          <h1
            className={`${gradientpurple} text-2xl font-fredoka py-2 sm:py-3 rounded-l-full text-white`}
          >
            Step 1
          </h1>
          <div
            className={`h-full ${gradientgray} flex justify-center items-center`}
          >
            <div>
              <p
                className={`text-lg p-4 align-center font-nunito text-darkText`}
              >
                Research the{" "}
                <span className="text-purpleText font-extrabold">paradise</span>{" "}
                you want to{" "}
                <span className="text-purpleText font-extrabold">be in</span>
              </p>
            </div>
          </div>
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
