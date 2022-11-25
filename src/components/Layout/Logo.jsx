import React from "react";
import logo from "../../assets/Logo_EcoTripr.png";

function Logo() {
  return (
    <div>
      <img className="absolute w-28 xs:w-36 sm:w-48 m-4" src={logo} />
    </div>
  );
}

export default Logo;
