import React from "react";
import { motion } from "framer-motion";
import beach from "/beach.jpg";
import { useState, createRef } from "react";
import * as htmlToImage from "html-to-image";
import ButtonCTA from "../Shared/ButtonCTA";
import { gradientpurple } from "../../utils/DesignTools";

const createFileName = (extension = "", ...names) => {
  if (!extension) {
    return "";
  }

  return `${names.join("")}.${extension}`;
};

function Step3({ responseImage, backgroundChosen }) {
  const ref = createRef(null);
  const [size, setSize] = useState(200);
  const [isFlip, setFlip] = useState(false);

  const takeScreenShot = async (node) => {
    const dataURI = await htmlToImage.toJpeg(node);
    return dataURI;
  };

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };
  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  return (
    <div className="flex flex-col ">
      <div className="w-full h-[180px] flex justify-around items-center">
        <div
          className={`${gradientpurple} scale-75 sm:scale-100 w-fit h-[80px] rounded-full text-3xl px-8 py-3 text-white font-fredoka font-bold mx-auto mt-8`}
        >
          <div className="w-fit flex flex-col justify-center items-center ">
            <label htmlFor="rangeSize" className="mb-2">
              SIZE ME !
            </label>
            <input
              className="range range-xs hover:scale-110"
              id="ranger"
              type="range"
              min="50"
              max="400"
              name="rangeSize"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-8 scale-[65%] sm:scale-75 hover:scale-75">
          <ButtonCTA cta={"FLIP ME !"} func={() => setFlip(!isFlip)} />
        </div>
      </div>
      <div ref={ref} className=" h-fit flex relative flex-col ">
        <div className="h-fit flex flex-col">
          <div className="h-fit flex justify-center">
            <motion.img
              drag
              dragConstraints={{
                right: 250,
                left: -350,
                top: -175,
                bottom: 350,
              }}
              id="range"
              src={
                responseImage
                  ? responseImage
                  : "public/Photo_Thomas_pour_test.png"
              }
              style={{
                width: `${size}px`,
              }}
              className={
                isFlip
                  ? "transform -scale-x-100 absolute object-cover"
                  : "absolute object-cover"
              }
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-fit">
          <motion.img
            src={backgroundChosen ? backgroundChosen : beach}
            className="w-full h-[600px] object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center items-center px-14 mt-8 mb-0  scale-75 sm:scale-100 hover:scale-110">
        <ButtonCTA cta={"DOWNLOAD SCREENSHOT"} func={downloadScreenshot} />
      </div>
    </div>
  );
}

export default Step3;
