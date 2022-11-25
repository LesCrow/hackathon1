import React from "react";

function Titles({ greyTitle, purpleTitle }) {
  return (
    <h1 className="">
      {greyTitle}
      <span>{purpleTitle}</span>
    </h1>
  );
}

export default Titles;
