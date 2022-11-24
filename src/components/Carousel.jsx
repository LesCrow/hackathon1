import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ResultCarousel = ({ backgroundImages }) => {
  return (
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
          <img src={item.largeImageURL} className="object-cover h-72 " />
        </div>
      ))}
    </Carousel>
  );
};

export default ResultCarousel;
