import React from "react";
import { motion } from "framer-motion";
import beach from "/beach.jpg";
import { useState, createRef } from "react";
import * as htmlToImage from "html-to-image";

const createFileName = (extension = "", ...names) => {
  if (!extension) {
    return "";
  }

  return `${names.join("")}.${extension}`;
};
function Step3() {
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
      <div className="flex justify-around w-full">
        <div className="flex flex-col justify-center items-center">
          <label htmlFor="rangeSize">Size me !</label>
          <input
            id="ranger"
            type="range"
            min="50"
            max="400"
            name="rangeSize"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>

        <button
          onClick={() => setFlip(!isFlip)}
          className=" bg-slate-500 rounded-md p-2 m-2"
        >
          Flip me !
        </button>
      </div>
      <div ref={ref} className="flex flex-col ">
        <div className="flex flex-col  ">
          <div className="flex flex-row w-full justify-center" />
          <div className="flex justify-center pb-2">
            <motion.img
              drag
              dragConstraints={{
                right: 250,
                left: -350,
                top: -175,
                bottom: 350,
              }}
              id="range"
              src="/Photo_Thomas_pour_test.png"
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
          <div className="flex flex-col justify-around"></div>
        </div>
        <div className="flex flex-col justify-center items-center w-fit">
          <motion.img src={beach} className="w-full h-[600px] object-fill" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={downloadScreenshot}
          className="bg-slate-500 rounded-md p-2 m-3 flex justify-center w-1/5 "
        >
          Download screenshot
        </button>
      </div>
    </div>
  );
}

export default Step3;
