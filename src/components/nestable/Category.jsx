"use client";
import React, { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Category = ({ blok }) => {
  // State to manage selected category
  const [isSelected, setIsSelected] = useState(false);

  // Toggle category selection
  const handleCategoryClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`border border-black p-4 cursor-pointer transition-colors ${
        isSelected ? "bg-black text-white" : "bg-white text-black"
      }`}
      {...storyblokEditable(blok)}
      onClick={handleCategoryClick} // Handle click event
    >
      <h2 className="text-l font-semibold">{blok?.name}</h2>
    </div>
  );
};

export default Category;
