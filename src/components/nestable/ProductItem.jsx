import React from 'react';
import Link from 'next/link';

const ProductItem = ({ product }) => {
  if (!product) {
    console.error('Product is undefined');
    return null; // Return null to avoid rendering the component
  }

  const { content: blok, slug } = product;
  console.log('ProductItem blok:', blok); // Add this line
  console.log('ProductItem slug:', slug); // Add this line

  return (
    <div className="border border-gray-300 p-4 m-4 text-center transition-shadow duration-300 ease-in-out hover:shadow-lg w-80 h-100 flex flex-col justify-between">
      <Link href={`/product/${slug}`} className="flex flex-col h-full">
        <div className="flex-grow mb-2">
          {blok.image?.filename ? (
            <img
              className="object-cover rounded-lg w-full h-full"
              src={blok.image.filename}
              alt={blok.image.alt || blok.name}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}
        </div>
        <div className="mt-2">
          <h2 className="text-xl font-semibold mb-1">{blok.title}</h2>
          <p className="font-bold text-gray-800">Price: ${blok.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;