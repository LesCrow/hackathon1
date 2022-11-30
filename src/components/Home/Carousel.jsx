import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { gradientdarkgray } from "../../utils/DesignTools";

const ResultCarousel = ({
  backgroundImages,
  setBackgroundChosen,
  setIsHome,
  setIsStep1,
  setIsStep2,
  setIsStep3,
  setIsDownload,
}) => {
  return (
    <div className={`w-full py-8 px-5 ${gradientdarkgray}`}>
      <Carousel
        autoPlay={true}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
      >
        {backgroundImages.data.hits.map((item) => (
          <div
            className=""
            key={item.id}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <img
              src={item.largeImageURL}
              className="object-cover h-72 md:h-96 md:object-contain"
            />
            <button
              onClick={() => (
                setBackgroundChosen(item.largeImageURL),
                setIsHome(false),
                setIsStep1(false),
                setIsStep2(true),
                setIsStep3(false),
                setIsDownload(false)
              )}
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purpleText h-20 px-4 w-40 rounded-full hover:shadow-lg
               bg-whiteText hover:bg-purpleText opacity-50 hover:opacity-95 border hover:text-white text-xl font-bold z-10`}
            >
              CHOOSE
              <br />
              THIS ONE
            </button>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ResultCarousel;
