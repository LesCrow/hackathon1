import React from "react";
import { gradientdarkgray, gradientgray } from "../../utils/DesignTools";
import useWindowSize from "../../hooks/useWindowSize";
import { useStepContext } from "../../Context/StepContext";

function BarNav() {
  const screenWidth = useWindowSize().width;
  const { step, setStep } = useStepContext();

  const step2ColorConditions =
    step === 2 || step === 3
      ? `${gradientgray}`
      : `${gradientdarkgray} text-whiteText opacity-25`;
  const step2or3ColorConditions =
    step === 3
      ? `${gradientgray}`
      : `${gradientdarkgray} text-whiteText opacity-25`;

  const step2or3ColorConditionsLine =
    step === 2 || step === 3
      ? "border-whiteText"
      : "border-darkText opacity-25";

  if (screenWidth > 520) {
    return (
      <div
        className="absolute top-[150px] left-1/2 transform
        -translate-x-1/2 w-4/5 xs:w-[70%] sm:w-[65%] max-w-[665px] flex justify-between items-end"
      >
        <button
          onClick={() => setStep(1)}
          className={`${gradientgray} w-12 md:w-16 h-12 md:h-16 rounded-full flex justify-center items-center`}
        >
          <p className="text-center align-middle font-fredoka font-medium text-3xl md:text-4xl">
            1
          </p>
        </button>

        <div
          className={`border-dotted border-b-8 h-10 md:h-12 w-[30%] md:w-[33%] mb-2 flex items-center pl-2 md:pl-4 text-whiteText font-fredoka font-normal`}
        >
          <p>Background</p>
        </div>

        <button
          onClick={() => setStep(2)}
          className={`${step2ColorConditions} w-12 md:w-16 h-12 md:h-16 rounded-full flex justify-center items-center`}
        >
          <p className="text-center align-middle font-fredoka font-medium text-3xl md:text-4xl">
            2
          </p>
        </button>

        <div
          className={`${step2or3ColorConditionsLine} border-dotted border-b-8 h-10 md:h-12 w-[30%] md:w-[33%] mb-2 flex items-center pl-2 md:pl-4 text-whiteText font-fredoka font-normal`}
        >
          {(step === 2 || step === 3) && <p>The tripr</p>}
        </div>
        <button
          onClick={() => setStep(3)}
          className={`${step2or3ColorConditions} w-12 md:w-16 h-12 md:h-16 rounded-full flex justify-center items-center`}
        >
          <p className="text-center align-middle font-fredoka font-medium text-3xl md:text-4xl">
            3
          </p>
        </button>
        <div className="absolute right-0 translate-x-full h-10 md:h-12 pl-2 md:pl-4 mb-3 flex items-center text-whiteText font-fredoka font-normal">
          {step === 3 && <p>Optimize</p>}
        </div>
      </div>
    );
  }

  return (
    <div
      className="absolute top-[150px] left-1/2 transform
      -translate-x-1/2 w-4/5 xs:w-[70%] sm:w-[65%] max-w-[665px] flex justify-between items-end"
    >
      <button
        onClick={() => setStep(1)}
        className={`${gradientgray} w-12 h-12 rounded-full flex justify-center items-center`}
      >
        <p className="text-center align-middle font-fredoka font-medium text-3xl">
          1
        </p>
      </button>

      {step === 1 && (
        <div
          className={`border-dotted border-b-8 h-10 w-[50%] mb-2 flex items-center pl-2 text-whiteText font-fredoka font-normal`}
        >
          <p>Background</p>
        </div>
      )}

      <button
        onClick={() => setStep(2)}
        className={`${step2ColorConditions} w-12 h-12 rounded-full flex justify-center items-center`}
      >
        <p className="text-center align-middle font-fredoka font-medium text-3xl">
          2
        </p>
      </button>

      {step === 2 && (
        <div
          className={`${step2or3ColorConditionsLine} border-dotted border-b-8 h-10 w-[50%] mb-2 flex items-center pl-2  text-whiteText font-fredoka font-normal`}
        >
          <p>The tripr</p>
        </div>
      )}
      <button
        onClick={() => setStep(3)}
        className={`${step2or3ColorConditions} w-12 h-12 rounded-full flex justify-center items-center`}
      >
        <p className="text-center align-middle font-fredoka font-medium text-3xl">
          3
        </p>
      </button>
      {step === 3 && (
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
