import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Bodies1bold from "../Shared/Bodies1bold";
import ButtonCTA from "../Shared/ButtonCTA";
import Titles from "../Shared/Titles";

const UploadAndDisplayImage = () => {
  const [yourImage, setImage] = useState([]);
  const [isUploaded, setIsUploaded] = useState(false);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setImage(
        acceptedFiles.map((upFile) =>
          Object.assign(upFile, {
            preview: URL.createObjectURL(upFile),
          })
        )
      );
      setIsUploaded(true);
    },
  });

  return (
    <div>
      <Titles greyTitle={"SELECT YOUR"} purpleTitle={"TRIPR"} />
      <Bodies1bold
        greyBody={"Choose the"}
        purpleBody={"person"}
        greyBodyNext={"you want in your paradise, maybe you ?"}
      />
      <div
        className={`${
          !isUploaded &&
          "h-[350px] w-[70%] mx-auto flex flex-col border-dashed border-4 rounded-[50px] border-gray-300 bg-white justify-center items-center"
        } w-full h-4/5`}
      >
        <div className="flex justify-center">
          <ButtonCTA cta={"UPLOAD"} func={console.log("Bonjour")} />
        </div>
        <div className="mt-5 flex justify-center" {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <div className="h-4/5 w-4/5">Drop the Image here</div>
          ) : (
            <div className=" font-nunito text-3xl">
              or <span className="font-bold text-purpleText">drag & drop.</span>
            </div>
          )}
        </div>
        <p className="text-sm text-center mt-4">
          Format <span className="font-bold mx-1">jpg, png</span> ou
          <span className="font-bold mx-1">webp</span>.<br />
          Max
          <span className="font-bold mx-1">30 Mo</span>.
        </p>
        <div>
          {yourImage.map((upFile) => {
            return (
              <div>
                <img
                  src={upFile.preview}
                  className="w-auto p-3"
                  alt="preview"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UploadAndDisplayImage;
