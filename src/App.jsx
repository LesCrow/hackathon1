import { motion } from "framer-motion";
import beach from "/beach.jpg";
import { useState, createRef } from "react";
import * as htmlToImage from "html-to-image";

const buttons = [
  { id: 1, value: "petite", class: "w-20 absolute" },
  { id: 2, value: "moyenne", class: "w-32  absolute" },
  { id: 3, value: "grande", class: "w-60 absolute" },
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
    <div>
      <div>
        {buttons.map((button, id) => (
          <button
            key={id}
            onClick={() => setSelectedSize(button)}
            className="rounded bg-gray-400  p-1 m-2 h-12"
          >
            {button.value}
          </button>
        ))}
      </div>
      <div ref={ref} className="flex flex-col ">
        <div className="flex flex-col  ">
          <div className="flex flex-row w-full justify-center"></div>{" "}
          <div className="flex justify-center pb-2">
            <motion.img
              drag
              className={`${selectedSize.class}`}
              src="/Photo_Thomas_pour_test.png"
            />
          </div>
          <div className="flex flex-col justify-around"></div>
        </div>
        <div>
          <img src={beach} className="w-full h-[600px] object-fill" />
          <button onClick={downloadScreenshot}>Download screenshot</button>
        </div>
      </div>
    </div>
  );
}

export default App;
