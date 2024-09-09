"use client";
import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Product = ({ blok }) => {
  return (
    <div
      className="flex flex-col overflow-hidden"
      {...storyblokEditable(blok)}
    >
      {/* Product Image */}
      {blok?.image?.filename && (
        <img
          src={blok.image.filename}
          alt={blok.image.alt || blok.name}
          className="w-full h-32 object-cover"
        />
      )}
      {/* Product Details */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-lg font-semibold mb-1">{blok.name}</h3>
        <p className="text-xl font-bold mb-2">${blok.price}</p>
        {blok.description && (
          <p className="text-sm text-gray-700">{blok.description}</p>
        )}
      </div>
    </div>
  );
};

export default Product;
