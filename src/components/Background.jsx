import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { categories } from "../utils/Constants";
import Button from "./Button";
import ResultCarousel from "./Carousel";

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
    <div className="w-full flex flex-col h-auto">
      {selectedCategory !== "" && (
        <div className="m-2">
          <ResultCarousel backgroundImages={backgroundImages} className="" />
        </div>
      )}

      <div className="relative">
        <input
          list="background"
          name="background-choice"
          type="search"
          placeholder="Where do you want to go ?"
          className="m-5 border h-12 w-[80%] p-3 rounded-full"
          onChange={(e) => {
            setNotYetSelectedCategory(e.target.value);
          }}
        />
        <div className="flex justify-center">
          <Button
            category={"OK"}
            onClick={(e) => {
              setSelectedCategory(notYetSelectedCategory.replace(" ", "+"));
            }}
          />
        </div>
      </div>

      <p className="flex justify-center p-2 ">
        Want some <span className="text-violet-600 ml-1"> ideas ?</span>
      </p>
      <div className="flex justify-around flex-wrap ">
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
