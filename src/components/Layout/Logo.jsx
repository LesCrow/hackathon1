import React from "react";
import logo from "../../assets/Logo_EcoTripr.png";

function Logo({ setStep }) {
  return (
    <img
      onClick={() => setStep(0)}
      className="absolute left-5 top-4 w-28 xs:w-36 sm:w-48 m-4"
      src={logo}
    />
  );
}

export default Logo;
