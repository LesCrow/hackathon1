import axios from "axios";
import React, { useEffect, useState } from "react";
import { categories } from "../../utils/Constants";
import ResultCarousel from "../Home/Carousel";
import { gradientpurple } from "../../utils/DesignTools";
import Titles from "../Shared/Titles";
import ButtonCategories from "../Shared/ButtonCategories";

function Background({
  setBackgroundChosen,
  setIsHome,
  setIsStep1,
  setIsStep2,
  setIsStep3,
  setIsDownload,
}) {
  const [notYetSelectedCategory, setNotYetSelectedCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        `https://pixabay.com/api/?key=31570516-64d729ef0c14c4c61bb7d9f02&q=${selectedCategory}&image_type=photo&per_page=20`
      );
      setBackgroundImages(data);
    };
    getData().finally(() => setIsLoading(false));
  }, [selectedCategory]);

  if (isLoading)
    return (
      <div className="h-96 text-center font-fredoka font-bold text-purpleText text-3xl pt-44">
        loading...
      </div>
    );

  return (
    <div className={`flex flex-col h-auto md:min-h-96px`}>
      <Titles greyTitle={"CHOOSE YOUR DREAMED"} purpleTitle={"DESTINATION"} />
      {selectedCategory !== "" && (
        <ResultCarousel
          backgroundImages={backgroundImages}
          setBackgroundChosen={setBackgroundChosen}
          setIsHome={setIsHome}
          setIsStep1={setIsStep1}
          setIsStep2={setIsStep2}
          setIsStep3={setIsStep3}
          setIsDownload={setIsDownload}
        />
      )}
      <div className="relative flex flex-row items-center w-5/6 mt-8 mx-auto md:h-fit md:w-full max-w-[400px]">
        <input
          list="background"
          name="background-choice"
          type="search"
          placeholder="Where you want to go ?"
          className="w-full bg-white max-w-[400px] my-5 mx-auto border h-12 rounded-full text-sm md:text-lg pl-4 p-2"
          onChange={(e) => {
            setNotYetSelectedCategory(e.target.value);
          }}
        />
        <div className="absolute right-2">
          <button
            className={`text-purpleText h-9 px-4 w-fit rounded-full hover:shadow-lg ${gradientpurple} text-white font-bold relative`}
            category={"OK"}
            onClick={(e) => {
              setSelectedCategory(notYetSelectedCategory.replace(" ", "+"));
            }}
          >
            OK
          </button>
        </div>
      </div>

      <p className="flex justify-center p-2 font-fredoka mt-4 mb-2 md:text-lg">
        Want some
        <span className="text-purpleText ml-1 md:text-lg"> ideas ?</span>
      </p>
      <div className="flex justify-center flex-wrap gap-2 ">
        {categories.map((category) => (
          <ButtonCategories
            category={category}
            value={category}
            onClick={(e) => setSelectedCategory(e.target.value)}
          />
        ))}
      </div>
    </div>
  );
}

export default Background;
