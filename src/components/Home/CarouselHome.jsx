import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function CarouselHome() {
  return (
    // NE reste plus qu'a faire les photos et faire le responsive
    <div className="w-full mx-auto mt-40 px-4 md:w-10/12  ">
      <Carousel
        autoPlay={true}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
      >
        <img
          className="md:h-64 md:object-cover md:w-full "
          src="/beach-paradise.jpg"
        />
        <img
          className="md:h-64 md:object-cover md:w-full "
          src="/namibia.jpg"
        />
        <img
          className="md:h-64 md:object-cover md:w-full "
          src="/orion-nebula.jpg"
        />
        <img className="md:h-64 md:object-cover md:w-full " src="/temple.jpg" />
        <img className="md:h-64 md:object-cover md:w-full " src="/yacht.jpg" />
      </Carousel>
    </div>
  );
}

export default CarouselHome;
