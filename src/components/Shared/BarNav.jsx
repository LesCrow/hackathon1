import React from "react";
import { gradientgray } from "../../utils/DesignTools";

function BarNav() {
  return (
    <div
      className={`absolute top-28 sm:top-[120px] left-1/2 transform
      -translate-x-1/2 w-4/5 xs:w-[70%] sm:w-[65%] max-w-[665px] flex justify-between`}
    >
      <div
        className={`w-12 h-12 rounded-full ${gradientgray} flex justify-center items-center`}
      >
        <p className="text-center align-middle font-fredoka font-medium text-dark text-3xl">
          1
        </p>
      </div>
      <div className="border-dotted border-b-8 bor h-12 w-[30%]" />
      <div
        className={`w-12 h-12 rounded-full ${gradientgray} flex justify-center items-center`}
      >
        <p className="text-center align-middle font-fredoka font-medium text-dark text-3xl">
          2
        </p>
      </div>
      <div className="border-dotted border-b-8 bor h-12 w-[30%] border-spacing-6" />
      <div
        className={`w-12 h-12 rounded-full ${gradientgray} flex justify-center items-center`}
      >
        <p className="text-center align-middle font-fredoka font-medium text-dark text-3xl">
          3
        </p>
      </div>
    </div>
  );
}

export default BarNav;
