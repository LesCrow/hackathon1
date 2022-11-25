import React, { useState } from "react";
import Logo from "../components/Layout/Logo";
import { gradientgray, gradientpurple } from "../utils/DesignTools";
import UploadAndDisplayImage from "../components/UploadStep/Upload";
import Home from "../components/Home/Home";
import BarNav from "../components/Shared/BarNav";
import Step3 from "../components/EndDownload/Step3";
import CarouselHome from "../components/Home/CarouselHome";

function Main() {
  const [isHome, setIsHome] = useState(false);
  const [yourImage, setImage] = useState([]);
  const [isStep1, setIsStep1] = useState(true);
  const [isStep2, setIsStep2] = useState(true);
  const [isStep3, setIsStep3] = useState(false);
  const [isDownload, setIsDownload] = useState(false);

  const barConditions = isStep1 || isStep2 || isStep3;

  return (
    <div className={`h-screen w-full ${gradientpurple}`}>
      <Logo
        setIsHome={setIsHome}
        setIsStep1={setIsStep1}
        setIsStep2={setIsStep2}
        setIsStep3={setIsStep3}
        setIsDownload={setIsDownload}
      />
      {!isHome && !isDownload && (
        <BarNav
          setIsHome={setIsHome}
          isStep1={isStep1}
          setIsStep1={setIsStep1}
          isStep2={isStep2}
          setIsStep2={setIsStep2}
          isStep3={isStep3}
          setIsStep3={setIsStep3}
          setIsDownload={setIsDownload}
        />
      )}
      {isHome && <CarouselHome />}
      <div
        className={`absolute ${
          isHome ? "top-72 sm:top-96" : "top-48 sm:top-[230px]"
        } left-1/2 transform -translate-x-1/2 
        w-4/5 xs:w-[70%] sm:w-[65%] first-letter: max-w-[665px] h-fit rounded-[35px] sm:rounded-[50px] ${gradientgray}`}
      >
        {isHome && <Home setIsHome={setIsHome} setIsStep1={setIsStep1} />}
        {isStep2 && <UploadAndDisplayImage />}
        {isStep3 && <Step3 />}
      </div>
    </div>
  );
}

export default Main;
