import { motion } from "framer-motion";
import beach from "/beach.jpg";
import { useState } from "react";
import { createRef } from "react";
import * as htmlToImage from "html-to-image";

const buttons = [
  { id: 1, value: "petite", class: "w-20" },
  { id: 2, value: "moyenne", class: "w-32 h-44" },
  { id: 3, value: "grande", class: "w-60" },
];

const createFileName = (extension = "", ...names) => {
  if (!extension) {
    return "";
  }

  return `${names.join("")}.${extension}`;
};

function App() {
  const [selectedSize, setSelectedSize] = useState(buttons[1]);
  const ref = createRef(null);

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
      <div className="flex flex-col ">
        <h1 className="w-full flex justify-center">
          Image recuperé par l'api avec le background en moins
        </h1>
        <div className="flex flex-row w-full justify-center">
          {buttons.map((button, id) => (
            <button
              key={id}
              onClick={() => setSelectedSize(button)}
              className="rounded bg-gray-400  p-1 m-2 h-12"
            >
              {button.value}
            </button>
          ))}
        </div>{" "}
        <div className="flex justify-center pb-2">
          <motion.img
            drag
            className={`${selectedSize.class}`}
            src="/Photo_Thomas_pour_test.png"
          />
        </div>
        <div className="flex flex-col justify-around"></div>
      </div>
      <h2>nouveau background pour l'image precedente</h2>

      <img src={beach} ref={ref} className="w-full h-[600px] object-fill" />
      <button onClick={downloadScreenshot}>Download screenshot</button>
    </div>
  );
}

export default App;
