import React from "react";

function Titles({ greyTitle, purpleTitle }) {
  return (
    <h1 className="w-full mx-auto mt-6 mb-5 md:mb-8 md:mt-9 font-fredoka font-medium text-2xl md:text-3xl text-center">
      {greyTitle}
      <br />
      <span className="text-purpleText">{purpleTitle}</span>
    </h1>
  );
}

export default Titles;
