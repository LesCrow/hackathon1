import { useContext } from "react";
import { createContext, useState } from "react";

const ImageContext = createContext({});

const ImageContextProvider = ({ children }) => {
  const [responseImage, setResponseImage] = useState(null);

  return (
    <ImageContext.Provider value={{ responseImage, setResponseImage }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  const context = useContext(ImageContext);
  return context;
};
export default ImageContextProvider;
