import React from "react";
import { gradientpurple } from "../utils/DesignTools";

function Button({ category, value, onClick }) {
  return (
    <button
      className={`text-violet-600 h-10  p-2 rounded-full hover:shadow-lg ${gradientpurple} text-white font-semibold hover:bg-white hover:text-violet-900 `}
      type="button"
      value={category}
      onClick={onClick}
    >
      {category}
    </button>
  );
}

export default Button;
