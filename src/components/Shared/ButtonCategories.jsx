import React from "react";
import { gradientpurple } from "../../utils/DesignTools";

function ButtonCategories({ category, value, onClick }) {
  return (
    <button
      className={`bg-white border h-10 px-4 rounded-full hover:shadow-lg text-purpleText font-semibold hover:bg-[#6E13E1]
      hover:text-whiteText `}
      type="button"
      value={category}
      onClick={onClick}
    >
      {category}
    </button>
  );
}

export default ButtonCategories;
