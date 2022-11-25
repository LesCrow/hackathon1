import React from "react";
import { Carousel } from "3d-react-carousal";

let slides = [
  <img src="https://picsum.photos/800/300/?random" alt="1" />,
  <img src="https://picsum.photos/800/301/?random" alt="2" />,
  <img src="https://picsum.photos/800/302/?random" alt="3" />,
  <img src="https://picsum.photos/800/303/?random" alt="4" />,
  <img src="https://picsum.photos/800/304/?random" alt="5" />,
];

function CarouselHome() {
  return (
    // NE reste plus qu'a faire les photos et faire le responsive
    <div className="w-4/5 max-w-[500px] mx-auto pt-36">
      <Carousel
        slides={slides}
        autoplay={true}
        interval={2000}
        arrows={true}
        style={{ height: 100 }}
      />
    </div>
  );
}

export default CarouselHome;