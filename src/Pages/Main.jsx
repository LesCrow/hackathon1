import React, { useState } from "react";
import Logo from "../components/Layout/Logo";
import { gradientgray, gradientpurple } from "../utils/DesignTools";
import UploadAndDisplayImage from "../components/UploadStep/Upload";
import Home from "../components/Home/Home";
import BarNav from "../components/Shared/BarNav";

function Main() {
  const [isHome, setIsHome] = useState(false);
  const [isStep1, setIsStep1] = useState(true);
  const [isStep2, setIsStep2] = useState(false);
  const [isStep3, setIsStep3] = useState(false);
  const [isDownload, steIsDownload] = useState(false);

  const barConditions = isStep1 || isStep2 || isStep3;

  return (
    <div className={`h-screen w-full ${gradientpurple}`}>
      <Logo />
      <BarNav
        isStep1={isStep1}
        setIsStep1={setIsStep1}
        isStep2={isStep2}
        setIsStep2={setIsStep2}
        isStep3={isStep3}
        setIsStep3={setIsStep3}
      />
      <div
        className={`absolute top-48 sm:top-[230px] left-1/2 transform -translate-x-1/2 
        w-4/5 xs:w-[70%] sm:w-[65%] first-letter: max-w-[665px] h-fit rounded-[35px] sm:rounded-[50px] ${gradientgray}`}
      >
        {isHome && <Home />}
        {isStep2 && <UploadAndDisplayImage />}
      </div>
    </div>
  );
}

export default Main;
