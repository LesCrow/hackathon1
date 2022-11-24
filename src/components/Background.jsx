import axios from "axios";
import { useEffect, useState } from "react";

function Background() {
  const [notYetSelectedCategory, setNotYetSelectedCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [backgroundImages, setBackgroundImages] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        `https://pixabay.com/api/?key=31570516-64d729ef0c14c4c61bb7d9f02&q=${selectedCategory}&image_type=photo&per_page=10`
      );
      setBackgroundImages(data);
    };
    getData();
  }, [selectedCategory]);

  return (
    <div className="w-full">
      <input
        list="background"
        name="background-choice"
        type="search"
        placeholder="Choose your dream destination"
        className="h8 w-full rounded-md"
        onChange={(e) => {
          setNotYetSelectedCategory(e.target.value);
        }}
      />

      <button
        className="w-20 border border-black"
        onClick={(e) => {
          setSelectedCategory(notYetSelectedCategory.replace(" ", "+"));
        }}
      >
        GO !{" "}
      </button>
      <div className="w-full flex flex-row justify-center  flex-wrap">
        {backgroundImages.data &&
          backgroundImages.data.hits.map((item) => (
            <img className="w-1/3 m-1" src={item.largeImageURL} />
          ))}
      </div>
    </div>
  );
}

export default Background;
