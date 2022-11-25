import React from "react";
import { gradientdarkgray, gradientgray } from "../../utils/DesignTools";
import useWindowSize from "../../hooks/useWindowSize";

function BarNav({
  setIsHome,
  isStep1,
  setIsStep1,
  isStep2,
  setIsStep2,
  isStep3,
  setIsStep3,
  setIsDownload,
}) {
  const screenWidth = useWindowSize().width;

  const step2ColorConditions =
    isStep2 || isStep3
      ? `${gradientgray}`
      : `${gradientdarkgray} text-whiteText opacity-25`;
  const step2or3ColorConditions = isStep3
    ? `${gradientgray}`
    : `${gradientdarkgray} text-whiteText opacity-25`;

  const step2or3ColorConditionsLine =
    isStep2 || isStep3 ? "border-whiteText" : "border-darkText opacity-25";

  if (screenWidth > 520) {
    return (
      <div
        className="absolute top-28 sm:top-[150px] left-1/2 transform
        -translate-x-1/2 w-4/5 xs:w-[70%] sm:w-[65%] max-w-[665px] flex justify-between items-end"
      >
        <div
          onClick={() => (
            setIsHome(false),
            setIsStep1(true),
            setIsStep2(false),
            setIsStep3(false),
            setIsDownload(false)
          )}
          className={`${gradientgray} w-12 md:w-16 h-12 md:h-16 rounded-full flex justify-center items-center`}
        >
          <p className="text-center align-middle font-fredoka font-medium text-3xl md:text-4xl">
            1
          </p>
        </div>

        <div
          className={`border-dotted border-b-8 h-10 md:h-12 w-[30%] md:w-[33%] mb-2 flex items-center pl-2 md:pl-4 text-whiteText font-fredoka font-normal`}
        >
          <p>Background</p>
        </div>

        <div
          onClick={() => (
            setIsHome(false),
            setIsStep1(false),
            setIsStep2(true),
            setIsStep3(false),
            setIsDownload(false)
          )}
          className={`${step2ColorConditions} w-12 md:w-16 h-12 md:h-16 rounded-full flex justify-center items-center`}
        >
          <p className="text-center align-middle font-fredoka font-medium text-3xl md:text-4xl">
            2
          </p>
        </div>

        <div
          className={`${step2or3ColorConditionsLine} border-dotted border-b-8 h-10 md:h-12 w-[30%] md:w-[33%] mb-2 flex items-center pl-2 md:pl-4 text-whiteText font-fredoka font-normal`}
        >
          {(isStep2 || isStep3) && <p>The tripr</p>}
        </div>
        <div
          onClick={() => (
            setIsHome(false),
            setIsStep1(false),
            setIsStep2(false),
            setIsStep3(true),
            setIsDownload(false)
          )}
          className={`${step2or3ColorConditions} w-12 md:w-16 h-12 md:h-16 rounded-full flex justify-center items-center`}
        >
          <p className="text-center align-middle font-fredoka font-medium text-3xl md:text-4xl">
            3
          </p>
        </div>
        <div className="absolute right-0 translate-x-full h-10 md:h-12 pl-2 md:pl-4 mb-3 flex items-center text-whiteText font-fredoka font-normal">
          {isStep3 && <p>Optimize</p>}
        </div>
      </div>
    );
  }

  return (
    <div
      className="absolute top-28 sm:top-[150px] left-1/2 transform
      -translate-x-1/2 w-4/5 xs:w-[70%] sm:w-[65%] max-w-[665px] flex justify-between items-end"
    >
      <div
        onClick={() => (
          setIsHome(false),
          setIsStep1(true),
          setIsStep2(false),
          setIsStep3(false),
          setIsDownload(false)
        )}
        className={`${gradientgray} w-12 h-12 rounded-full flex justify-center items-center`}
      >
        <p className="text-center align-middle font-fredoka font-medium text-3xl">
          1
        </p>
      </div>

      {isStep1 && (
        <div
          className={`border-dotted border-b-8 h-10 w-[50%] mb-2 flex items-center pl-2 text-whiteText font-fredoka font-normal`}
        >
          <p>Background</p>
        </div>
      )}

      <div
        onClick={() => (
          setIsHome(false),
          setIsStep1(false),
          setIsStep2(true),
          setIsStep3(false),
          setIsDownload(false)
        )}
        className={`${step2ColorConditions} w-12 h-12 rounded-full flex justify-center items-center`}
      >
        <p className="text-center align-middle font-fredoka font-medium text-3xl">
          2
        </p>
      </div>

      {isStep2 && (
        <div
          className={`${step2or3ColorConditionsLine} border-dotted border-b-8 h-10 w-[50%] mb-2 flex items-center pl-2  text-whiteText font-fredoka font-normal`}
        >
          <p>The tripr</p>
        </div>
      )}
      <div
        onClick={() => (
          setIsHome(false),
          setIsStep1(false),
          setIsStep2(false),
          setIsStep3(true),
          setIsDownload(false)
        )}
        className={`${step2or3ColorConditions} w-12 h-12 rounded-full flex justify-center items-center`}
      >
        <p className="text-center align-middle font-fredoka font-medium text-3xl">
          3
        </p>
      </div>
      {isStep3 && (
        <div
          className={`border-dotted border-b-8 h-10 w-[50%] mb-2 flex items-center  text-whiteText font-fredoka font-normal`}
        >
          <p>Optimize</p>
        </div>
      )}
    </div>
  );
}

export default BarNav;
