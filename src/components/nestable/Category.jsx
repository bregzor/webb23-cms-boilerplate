"use client";
import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Category = ({ blok, onClick, isSelected }) => {
  return (
    <div
      className={`border border-black p-4 cursor-pointer transition-colors ${
        isSelected ? "bg-black text-white" : "bg-white text-black"
      }`}
      {...storyblokEditable(blok)}
      onClick={onClick} // Handle click event
    >
      <h2 className="text-l font-semibold">{blok?.name}</h2>
    </div>
  );
};

export default Category;
