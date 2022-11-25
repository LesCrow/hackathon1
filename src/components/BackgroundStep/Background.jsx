import axios from "axios";
import React, { useEffect, useState } from "react";
import { categories } from "../../utils/Constants";
import Button from "../Shared/Button";
import ResultCarousel from "../Home/Carousel";
import { gradientgray } from "../../utils/DesignTools";
import { gradientpurple } from "../../utils/DesignTools";

function Background() {
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

  if (isLoading) return <div>loading...</div>;

  return (
    <div
      className={` flex flex-col h-auto md:min-h-96px md:justify-around ${gradientgray} rounded-lg m-10 p-4 md:m-20 md:gap-16`}
    >
      <div className="font-fredoka flex flex-col justify-center items-center mb-4 md:text-2xl">
        CHOOSE YOUR DREAMED
        <span className="text-purpleText">DESTINATION</span>
      </div>
      {selectedCategory !== "" && (
        <div className="m-2">
          <ResultCarousel backgroundImages={backgroundImages} className="" />
        </div>
      )}

      <div className="relative flex flex-row items-center justify-around md:w-full ">
        <input
          list="background"
          name="background-choice"
          type="search"
          placeholder="Where do you want to go ?"
          className="my-5 border h-12 w-[80%]  rounded-full text-xs md:text-lg p-1 md:p-5 absolute md:w-1/2 "
          onChange={(e) => {
            setNotYetSelectedCategory(e.target.value);
          }}
        />
        <div className=" ml-36 md:ml-[530px]">
          <button
            className={`text-violet-600  h-10 px-4  md:px-7 w-fit rounded-full hover:shadow-lg ${gradientpurple} text-white font-bold relative`}
            category={"OK"}
            onClick={(e) => {
              setSelectedCategory(notYetSelectedCategory.replace(" ", "+"));
            }}
          >
            OK
          </button>
        </div>
      </div>

      <p className="flex justify-center p-2 font-fredoka mt-4 mb-2 md:text-lg ">
        Want some{" "}
        <span className="text-violet-600 ml-1 md:text-lg"> ideas ?</span>
      </p>
      <div className="flex justify-center flex-wrap gap-2 ">
        {categories.map((category) => (
          <Button
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
