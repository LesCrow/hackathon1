import React, { useState } from "react";
import Logo from "../components/Layout/Logo";
import { gradientgray, gradientpurple } from "../utils/DesignTools";
import UploadAndDisplayImage from "../components/UploadStep/Upload";
import Home from "../components/Home/Home";
import BarNav from "../components/Shared/BarNav";
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

      <div
        className={` ${
          isHome ? "mt-56 sm:mt-56 mb-20" : "mt-56 sm:mt-[250px] mb-44"
        }
        w-4/5 mx-auto  pb-12 xs:w-[70%] sm:w-[65%] max-w-[665px] h-fit rounded-[35px] sm:rounded-[50px] ${gradientgray}`}
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
        <UploadAndDisplayImage
          setIsHome={setIsHome}
          setIsStep1={setIsStep1}
          setIsStep2={setIsStep2}
          setIsStep3={setIsStep3}
          isStep2={isStep2}
          isStep3={isStep3}
          backgroundChosen={backgroundChosen}
        />
      </div>
      {isHome && <CarouselHome />}
    </div>
  );
}

export default Index;
