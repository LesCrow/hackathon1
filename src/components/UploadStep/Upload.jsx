import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

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
    <div className="flex justify-center h-fit min-h-[400px]">
      <div>
        <p>
          SELECT YOUR <br />
          TRIPR
        </p>
        <p className={"$"}>
          Choose the person you want in your paradise, maybe you ?
        </p>
        <div
          className={`${
            !isUploaded &&
            "border-dashed border-4 border-gray-600 flex justify-center items-center"
          } w-full h-4/5`}
        >
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <div className="h-4/5 w-4/5">Drop the Image here</div>
            ) : (
              <div className="">
                <div>Drag and drop Image or click to select Image</div>
              </div>
            )}
          </div>
          <div>
            {yourImage.map((upFile) => {
              return (
                <div>
                  <img src={upFile.preview} className="w-[80%]" alt="preview" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadAndDisplayImage;
