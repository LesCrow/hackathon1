import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { categories } from "../utils/Constants";
import Button from "./Button";
import ResultCarousel from "./Carousel";
import { gradientgray } from "../utils/DesignTools";
import { gradientpurple } from "../utils/DesignTools";

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
      className={` flex flex-col h-auto ${gradientgray} rounded-lg m-10 p-4`}
    >
      <div className="font-fredoka flex flex-col justify-center items-center">
        CHOOSE YOUR DREAMED
        <span className="text-purpleText">DESTINATION</span>
      </div>
      {selectedCategory !== "" && (
        <div className="m-2">
          <ResultCarousel backgroundImages={backgroundImages} className="" />
        </div>
      )}

      <div className="relative flex flex-row items-center justify-around ">
        <input
          list="background"
          name="background-choice"
          type="search"
          placeholder="Where do you want to go ?"
          className="my-5 border h-12 w-[80%]  rounded-full text-xs p-1"
          onChange={(e) => {
            setNotYetSelectedCategory(e.target.value);
          }}
        />
        <div className="flex ">
          <button
            className={`text-violet-600 h-10 w-10  p-2 rounded-full hover:shadow-lg ${gradientpurple} text-white font-semibold hover:bg-white hover:text-violet-900 `}
            category={"OK"}
            onClick={(e) => {
              setSelectedCategory(notYetSelectedCategory.replace(" ", "+"));
            }}
          >
            OK
          </button>
        </div>
      </div>

      <p className="flex justify-center p-2 font-fredoka">
        Want some <span className="text-violet-600 ml-1"> ideas ?</span>
      </p>
      <div className="flex justify-around flex-wrap gap-2 ">
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
