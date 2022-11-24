import React, { useState } from "react";
import Logo from "../components/Layout/Logo";
import { gradientgray, gradientpurple } from "../utils/DesignTools";
import UploadAndDisplayImage from "../components/UploadStep/Upload";
import Home from "../components/Home/Home";
import BarNav from "../components/Shared/BarNav";

function Main() {
  const [isHomeStep, setIsHomeStep] = useState(false);
  const [isUploadStep, setIsUploadState] = useState(false);
  const [isFollowingSteps, setIsFollowingSteps] = useState(false);

  return (
    <div className={`h-screen w-full ${gradientpurple}`}>
      <Logo />
      {isFollowingSteps && <BarNav />}
      <div
        className={`absolute top-48 sm:top-[200px] left-1/2 transform -translate-x-1/2 
        w-4/5 xs:w-[70%] sm:w-[65%] first-letter: max-w-[665px] h-fit rounded-[35px] sm:rounded-[50px] ${gradientgray}`}
      >
        {isUploadStep && <UploadAndDisplayImage />}
        {isHomeStep && <Home />}
      </div>
    </div>
  );
}

export default Main;
