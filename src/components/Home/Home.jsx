import React from "react";
import { useStepContext } from "../../Context/StepContext";
import ButtonCTA from "../Shared/ButtonCTA";
import Step from "../Step";
import Step2 from "../Step2";
import Step3 from "../Step3";
import CarouselHome from "./CarouselHome";

function Home() {
  const { setStep } = useStepContext();

  return (
    <div>
      <div className="w-full text-center mt-8 flex justify-center">
        <h1 className="font-fredoka font-medium text-4xl sm:text-5xl text-purpleText mr-16 sm:mr-28 relative">
          Welcome
          <span className="absolute top-[18px] sm:top-4 left-[116px] sm:left-36 font-shalimar text-6xl sm:text-8xl text-darkText">
            ecotripr
          </span>
        </h1>
      </div>
      <div className="text-center p-10 font-nunito text-darkText text-lg mt-16 sm:text-lg">
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
            <br />
            <span className="text-2xl">
              <b>
                just
                <span className="text-purpleText font-extrabold ml-2">
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
      <div className="text-center font-nunito text-2xl mt-8">
        <p>
          <span className="text-purpleText font-extrabold">Easy</span>, isn't it
          ? So...
        </p>
        <div className="flex justify-center h-14 my-6">
          <img src="src/assets/fleche.png" alt="fleche" />
        </div>
        <ButtonCTA cta={"GO !"} func={() => setStep(1)} />
      </div>
      <CarouselHome />
    </div>
  );
}

export default Home;
