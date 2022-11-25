import React from "react";
import { gradientpurple } from "../../utils/DesignTools";

function ButtonCTA({ cta, func }) {
  return (
    <div>
      <button
        type="button"
        onClick={func}
        className={`${gradientpurple} w-fit h-fit rounded-full text-4xl px-5 py-3 text-white font-fredoka font-bold mx-auto`}
      >
        {cta}
      </button>
    </div>
  );
}

export default ButtonCTA;
