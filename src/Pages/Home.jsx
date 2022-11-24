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
        className={`absolute top-[199px] left-1/2 transform -translate-x-1/2 w-3/5 max-w-[665px] h-fit  rounded-[50px] ${gradientgray}`}
      >
        <div className="bg-gray h-44"></div>
      </div>
    </div>
  );
}

export default Home;
