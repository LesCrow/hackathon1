import React, { useState } from "react";
import Logo from "../components/Layout/Logo";
import { gradientgray, gradientpurple } from "../utils/DesignTools";
import UploadAndDisplayImage from "../components/UploadStep/Upload";
import Home from "../components/Home/Home";
import BarNav from "../components/Shared/BarNav";
import Background from "../components/BackgroundStep/Background";
import Step3 from "../components/EndDownload/Step3";

function Index() {
  const [step, setStep] = useState(0);
  const stepComponents = [Home, Background, UploadAndDisplayImage, Step3];
  const Comp = stepComponents[step];

  const [isDownload, setIsDownload] = useState(false);
  const [backgroundChosen, setBackgroundChosen] = useState("");

  const barConditions = 1 || 2 || 3;

  return (
    <div
      className={`h-full w-full ${gradientpurple} flex flex-col relative z-0`}
    >
      <Logo setStep={setStep} />
      <BarNav step={step} setStep={setStep} setIsDownload={setIsDownload} />
      <div
        className={` ${
          setStep === 0 ? "mt-56 sm:mt-56 mb-20" : "mt-56 sm:mt-[250px] mb-44"
        }
        w-4/5 mx-auto  pb-12 xs:w-[70%] sm:w-[65%] max-w-[665px] h-fit rounded-[35px] sm:rounded-[50px] ${gradientgray}`}
      >
        <Comp
          setStep={setStep}
          step={step}
          setIsDownload={setIsDownload}
          isDownload={isDownload}
          setBackgroundChosen={setBackgroundChosen}
          backgroundChosen={backgroundChosen}
        />
      </div>
    </div>
  );
}

export default Index;
