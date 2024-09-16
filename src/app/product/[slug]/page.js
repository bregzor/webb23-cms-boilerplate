"use client";
import React, { useEffect, useState } from 'react';
import { fetchProductBySlug } from '@/app/lib/storyblok';

const ProductDetail = ({ params }) => {
  const [product, setProduct] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, []);

  useEffect(() => {
    console.log('params.slug:', params.slug);
    async function loadProduct() {
      if (params.slug) {
        const fetchedProduct = await fetchProductBySlug(params.slug);
        setProduct(fetchedProduct);
      }
    }
    loadProduct();
  }, [params.slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { content: blok } = product;

  return (
    <section
      className="w-full p-16 flex flex-col items-center justify-center mb-16"
      style={{ height: `calc(100vh - ${headerHeight}px)`, paddingBottom: '2rem' }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-screen-lg">
        <div className="w-full sm:w-2/3 p-4">
          <img
            src={blok.image.filename}
            alt={blok.image.alt || blok.title}
            className="w-full h-auto object-cover  border-black p-2 border-2"
            style={{ maxWidth: '600px', maxHeight: '700px' }} // Set consistent size for the image
          />
        </div>
        <div className="w-full sm:w-1/3 p-4 text-center sm:text-left">
          <h1 className="text-3xl font-bold text-black mb-2">{blok.title}</h1>
          <p className="text-l text-gray-500 mb-4">{blok.description}</p>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Sizes Available:</h3>
            <div className="flex flex-wrap gap-2">
              {blok.sizes.map((size, index) => (
                <div
                  key={index}
                  className="w-12 h-12 flex items-center justify-center border border-black "
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Price:</h3>
            <p className="font-bold text-gray-800 text-2xl">${blok.price}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Model Info:</h3>
            <p>{blok.model_info || 'No model information available.'}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Color:</h3>
            <p>{blok.colors}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;