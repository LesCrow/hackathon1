import React from "react";

function Bodies1bold({
  greyBody,
  purpleBody,
  greyBodyNext,
  purpleBodyNext,
  greyBodyNext2,
}) {
  return (
    <p className="w-full mx-auto mt-6 mb-5 md:mb-8 md:mt-9 font-fredoka font-medium text-2xl md:text-3xl text-center">
      {greyBody}
      <span className="text-purpleText">{purpleBody}</span>
      [greyBodyNext]
    </p>
  );
}

export default Bodies1bold;
