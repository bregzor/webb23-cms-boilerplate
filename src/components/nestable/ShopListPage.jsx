"use client";
import React, { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import Product from "./Product";
import Category from "./Category"; // Ensure this path is correct

export default function ShopListPage({ blok }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Handle category click
  const handleCategoryClick = (categorySlug) => {
    setSelectedCategory(categorySlug);
  };

  // Reset category filter
  const handleAllClick = () => {
    setSelectedCategory(null);
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? blok.products.filter((product) =>
        product.category.includes(selectedCategory)
      )
    : blok.products;

  return (
    <section className="w-full bg-red" {...storyblokEditable(blok)}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Headline */}
        <h1 className="text-4xl font-bold mb-4">{blok?.headline}</h1>

        {/* Description */}
        <p className="text-lg mb-8">{blok?.description}</p>

        {/* Categories */}
        <div className="flex flex-wrap items-start mb-8">
          {/* "All" Button */}
          <button
            className={`w-28 mr-2 mb-2 p-4 border border-black cursor-pointer transition-colors ${
              !selectedCategory ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={handleAllClick}
          >
            <h2 className="text-l font-semibold">All</h2>
          </button>
          {/* Category Buttons */}
          {blok?.categories?.map((category) => (
            <div className="w-28 mr-2 mb-2" key={category._uid}>
              <Category
                blok={category}
                onClick={handleCategoryClick}
                isSelected={selectedCategory === category.slug}
              />
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Product key={product._uid} blok={product} />
            ))
          ) : (
            <p>No products found for this category.</p>
          )}
        </div>
      </div>
    </section>
  );
}
