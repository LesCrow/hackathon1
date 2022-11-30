import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function CarouselHome() {
  return (
    // NE reste plus qu'a faire les photos et faire le responsive
    <div className=" max-w-[800px]  mx-auto mb-20 p-10">
      <Carousel
        autoPlay={true}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
      >
        <img
          className="  object-cover sm:object-fill   sm:rounded-md rounded-lg  md:w-[85] "
          src="/fannyHippy.jpg"
        />
        <img
          className="  object-cover sm:object-fill   sm:rounded-md rounded-lg  md:w-[85] "
          src="/johnHobbit.jpg"
        />
        <img
          className="w-1/2  object-cover  sm:object-fill  sm:rounded-md rounded-lg  md:w-[85]"
          src="/TomtomGPS.jpg"
        />
        <img
          className="  object-cover sm:object-fill   sm:rounded-md rounded-lg  md:w-[85] "
          src="/DamienPoney.jpg"
        />
        <img
          className="  object-cover sm:object-fill   sm:rounded-md rounded-lg  md:w-[85] "
          src="/Lucas.jpg"
        />
      </Carousel>
    </div>
  );
}

export default CarouselHome;
