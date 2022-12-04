import axios from "axios";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useImageContext } from "../../Context/Imagecontext";
import Step3 from "../EndDownload/Step3";

import Bodies1bold from "../Shared/Bodies1bold";
import ButtonCTA from "../Shared/ButtonCTA";
import Titles from "../Shared/Titles";

export function getImage(file) {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    if (!file.type.match(/image.*/)) {
      reject(new Error("Not an image"));
      return;
    }
    reader.onload = (readerEvent) => {
      resolve(readerEvent.target.result);
    };
    reader.readAsDataURL(file);
  });
}

const UploadAndDisplayImage = ({ step, setStep }) => {
  const { responseImage, setResponseImage } = useImageContext();
  const [yourImage, setImage] = useState([]);
  const [isUploaded, setIsUploaded] = useState(false);
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
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

  const removeBackgroundApiCall = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);
    try {
      const response = await axios.post(
        "https://clipdrop-api.co/remove-background/v1",
        formData,
        {
          responseType: "blob",
          headers: {
            "Content-type": "multipart/form-data",
            "x-api-key": "",
          },
        }
      );

      getImage(response.data).then((res) => {
        setResponseImage(res);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setStep(3);
    }
  };

  return (
    <div>
      <div>
        {responseImage && <img src={responseImage} />}
        <Titles greyTitle={"SELECT YOUR"} purpleTitle={"TRIPR"} />
        <Bodies1bold
          greyBody={"Choose the"}
          purpleBody={"person"}
          greyBodyNext={"you want in your paradise, maybe you ?"}
        />
        <div
          className={`${
            !isUploaded &&
            "h-[350px] w-[70%] min-h-[400px] mx-auto flex flex-col border-dashed border-4 rounded-[50px] border-gray-300 bg-white justify-center items-center"
          } w-full `}
        >
          <div
            className="mt-5 w-full flex justify-center align-middle items-center"
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <div className="h-4/5 ">Drop the Image here</div>
            ) : (
              <div className="font-nunito text-3xl">
                <span className="font-bold text-purpleText">drag & drop.</span>
              </div>
            )}
          </div>
          <p className="text-sm text-center mt-4">
            Format <span className="font-bold mx-1">jpg, png</span> ou
            <span className="font-bold mx-1">webp</span>.<br />
            Max
            <span className="font-bold mx-1">30 Mo</span>.
          </p>
          <div className="w-full flex justify-center align-middle items-center">
            {yourImage.map((upFile) => {
              return (
                <img src={upFile.preview} className="w-[80%]" alt="preview" />
              );
            })}
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <ButtonCTA
            cta={"UPLOAD"}
            func={() => removeBackgroundApiCall(acceptedFiles[0])}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadAndDisplayImage;
