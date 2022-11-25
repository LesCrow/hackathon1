import React, { useState } from "react";
import Logo from "../components/Layout/Logo";
import { gradientgray, gradientpurple } from "../utils/DesignTools";
import UploadAndDisplayImage from "../components/UploadStep/Upload";
import Home from "../components/Home/Home";

function Main() {
  const [isHomeStep, setIsHomeStep] = useState(false);
  const [yourImage, setImage] = useState([]);
  const [isUploadStep, setIsUploadStep] = useState(true);

  return (
    <div className={`h-screen w-full ${gradientpurple}`}>
      <Logo />
      <div
        className={`absolute top-32 xs:top-40 sm:top-[200px] left-1/2 transform -translate-x-1/2 w-4/5 xs:w-[70%] sm:w-[65%] first-letter: max-w-[665px] h-fit  rounded-[50px] ${gradientgray}`}
      >
        <div className="bg-gray h-fit">
          {isUploadStep && <UploadAndDisplayImage />}
          {isHomeStep && <Home />}
        </div>
      </div>
    </div>
  );
}

export default Main;
