import React from "react";
import ButtonCTA from "../Shared/ButtonCTA";
import Step from "../Step";
import Step2 from "../Step2";
import Step3 from "../Step3";

function Home({ setIsHome, setIsStep1 }) {
  return (
    <div>
      <div className="w-full text-center mt-8 flex justify-center">
        <h1 className="font-fredoka font-medium text-5xl text-purpleText mr-28 relative">
          Welcome
          <span className="absolute top-4 left-36 font-shalimar text-8xl text-darkText">
            ecotripr
          </span>
        </h1>
      </div>
      <div className="text-center p-10 font-nunito text-darkText text-xs mt-16 ">
        <div>
          <p>
            You surely asking yourself <b>what is an ecotripr ?</b> It is
            everyone who need to escape for a second.
          </p>
          <br />
        </div>
        <div>
          <p>
            Feel what is like to travel around the world from your seat with
            <span className="text-lg">
              <b className="ml-1">
                just
                <span className="text-purpleText font-extrabold ml-1">
                  3 steps:
                </span>
              </b>
            </span>
          </p>
        </div>
      </div>
      <Step />
      <Step2 />
      <Step3 />
      <div className="text-center m-4 font-nunito">
        <p>
          <span className="text-purpleText font-extrabold">Easy</span>, isn't it
          ? So...
        </p>
        <div className="flex justify-center h-7 my-4">
          <img src="src/assets/fleche.png" alt="fleche" />
        </div>
        <ButtonCTA
          cta={"GO !"}
          func={() => (setIsHome(false), setIsStep1(true))}
        />
      </div>
    </div>
  );
}

export default Home;
