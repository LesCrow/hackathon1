import React from "react";
import ButtonCTA from "../Shared/ButtonCTA";

function Home({ setIsHome, setIsStep1 }) {
  return (
    <div className="px-[10%] h-44 flex flex-col">
      <ButtonCTA
        cta={"GO !"}
        func={() => (setIsHome(false), setIsStep1(true))}
      />
    </div>
  );
}

export default Home;
