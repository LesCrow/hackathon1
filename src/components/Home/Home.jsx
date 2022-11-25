import React from "react";
import { gradientpurple } from "../../utils/DesignTools";

function Home({ setIsHome, setIsStep1 }) {
  return (
    <div className="h-44 flex flex-col">
      <button
        type="button"
        onClick={() => (setIsHome(false), setIsStep1(true))}
        className={`${gradientpurple} w-fit h-fit rounded-full text-4xl px-5 py-3 text-white font-fredoka font-bold mx-auto`}
      >
        GO !
      </button>
    </div>
  );
}

export default Home;
