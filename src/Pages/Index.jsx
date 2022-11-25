import React, { useState } from "react";
import Logo from "../components/Layout/Logo";
import { gradientgray, gradientpurple } from "../utils/DesignTools";
import UploadAndDisplayImage from "../components/UploadStep/Upload";
import Home from "../components/Home/Home";
import BarNav from "../components/Shared/BarNav";
import Step3 from "../components/EndDownload/Step3";
import CarouselHome from "../components/Home/CarouselHome";
import Background from "../components/BackgroundStep/Background";

function Index() {
  const [isHome, setIsHome] = useState(true);
  const [isStep1, setIsStep1] = useState(false);
  const [isStep2, setIsStep2] = useState(false);
  const [isStep3, setIsStep3] = useState(false);
  const [isDownload, setIsDownload] = useState(false);
  const [yourImage, setImage] = useState([]);
  const [backgroundChosen, setBackgroundChosen] = useState("");

  const barConditions = isStep1 || isStep2 || isStep3;

  return (
    <div
      className={`h-full w-full ${gradientpurple} flex flex-col relative z-0`}
    >
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
        className={` ${isHome ? "mt-10 sm:mt-12" : "mt-56 sm:mt-[250px]"}
        w-4/5 mx-auto mb-44 pb-12 xs:w-[70%] sm:w-[65%] max-w-[665px] h-fit rounded-[35px] sm:rounded-[50px] ${gradientgray}`}
      >
        {isHome && <Home setIsHome={setIsHome} setIsStep1={setIsStep1} />}
        {isStep1 && (
          <Background
            setBackgroundChosen={setBackgroundChosen}
            setIsHome={setIsHome}
            setIsStep1={setIsStep1}
            setIsStep2={setIsStep2}
            setIsStep3={setIsStep3}
            setIsDownload={setIsDownload}
          />
        )}
        <UploadAndDisplayImage isStep2={isStep2} isStep3={isStep3} />
      </div>
    </div>
  );
}

export default Index;
