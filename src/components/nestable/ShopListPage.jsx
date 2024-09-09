"use client";
import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Image from "next/image";

export default function ShopListPage({ blok }) {
  console.log("anything?", blok);

  return (
    <section className="w-full bg-red" {...storyblokEditable(blok)}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Headline */}
        <h1 className="text-4xl font-bold mb-4">{blok?.headline}</h1>

        {/* Description */}
        <p className="text-lg mb-8">{blok?.description}</p>

        {/* Categories */}
        <div className="flex flex-wrap items-start mb-8">
          {blok?.categories?.map((category) => (
            <div className="w-28 mr-2 mb-2" key={category._uid}>
              <StoryblokComponent blok={category} />
            </div>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blok?.products?.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 text-center shadow hover:shadow-lg transition-shadow"
            >
              <Image
                src={product?.image?.filename}
                alt={product?.name}
                width={200}
                height={200}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-medium">{product?.name}</h3>
              <p className="text-sm text-gray-600">{product?.size}</p>
              <p className="text-lg font-semibold mt-2">${product?.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
