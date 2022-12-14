import React from "react";
import logo from "../../assets/Logo_EcoTripr.png";

function Logo({
  setIsHome,
  setIsStep1,
  setIsStep2,
  setIsStep3,
  setIsDownload,
}) {
  return (
    <img
      onClick={() => (
        setIsHome(true),
        setIsStep1(false),
        setIsStep2(false),
        setIsStep3(false),
        setIsDownload(false)
      )}
      className="absolute left-5 top-4 w-28 xs:w-36 sm:w-48 m-4"
      src={logo}
    />
  );
}

export default Logo;
