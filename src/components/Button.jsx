import React from "react";

function Button({ category, value, onClick }) {
  return (
    <button
      className="text-violet-600 border p-2 rounded-full hover:shadow-lg mb-2"
      type="button"
      value={category}
      onClick={onClick}
    >
      {category}
    </button>
  );
}

export default Button;
