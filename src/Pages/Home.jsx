import React from "react";
import Logo from "../components/Logo";
import { gradientgray, gradientpurple } from "../utils/DesignTools";

function Home() {
  return (
    <div className={`h-screen w-full ${gradientpurple}`}>
      <div>
        <Logo />
      </div>
      <div
        className={`absolute top-32 xs:top-40 sm:top-[200px] left-1/2 transform -translate-x-1/2 w-4/5 xs:w-[70%] sm:w-[65%] first-letter: max-w-[665px] h-fit  rounded-[50px] ${gradientgray}`}
      >
        <div className="bg-gray h-fit"></div>
      </div>
    </div>
  );
}

export default Home;
