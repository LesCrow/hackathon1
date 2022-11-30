import React from "react";

function Bodies1bold({ greyBody, purpleBody, greyBodyNext }) {
  return (
    <p className="w-full px-5 sm:px-10 mx-auto mt-6 mb-5 md:mb-8 md:mt-9 font-nunito font-normal text-md md:text-lg text-center">
      {greyBody}
      <span className="text-purpleText mx-2">{purpleBody}</span>
      {greyBodyNext}
    </p>
  );
}

export default Bodies1bold;
