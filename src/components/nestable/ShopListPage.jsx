"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Use 'next/navigation' for the router
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Product from "./Product";

export default function ShopListPage({ blok }) {
  const router = useRouter(); // Initialize router
  const [selectedCategory, setSelectedCategory] = useState(null); // Initialize state for the selected category

  // Update selected category based on URL parameters
  useEffect(() => {
    const categoryFromQuery = new URLSearchParams(window.location.search).get('category');
    setSelectedCategory(categoryFromQuery || null);
  }, [router]);

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? blok.products.filter((product) =>
        product.category.includes(selectedCategory)
      )
    : blok.products;

  // Function to handle category change
  const handleCategoryChange = (slug) => {
    const newCategory = slug === "all" ? null : slug; 
    setSelectedCategory(newCategory);
    router.push(`?category=${newCategory || ""}`, undefined, { shallow: true });
  };

  return (
    <section className="w-full bg-red" {...storyblokEditable(blok)}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Headline */}
        <h1 className="text-4xl font-bold mb-4">{blok?.headline}</h1>

        {/* Description */}
        <p className="text-lg mb-8">{blok?.description}</p>

        {/* Categories */}
        <div className="flex flex-wrap items-start mb-8">
          <button
            onClick={() => handleCategoryChange("all")}
            className={`w-28 mr-2 mb-2 border p-2 ${
              selectedCategory === null ? "bg-black text-white" : ""
            }`}
          >
            All
          </button>
          {blok?.categories?.map((category) => (
            <button
              key={category._uid}
              onClick={() => handleCategoryChange(category.slug)}
              className={`w-28 mr-2 mb-2 border p-2 ${
                selectedCategory === category.slug ? "bg-black text-white" : ""
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Product key={product._uid} blok={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
