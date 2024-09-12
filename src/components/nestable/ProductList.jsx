"use client";
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '@/app/lib/storyblok';
import ProductItem from '@/components/nestable/ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const fetchedProducts = await fetchProducts();
      console.log('Products in ProductList:', fetchedProducts); // Add this line
      setProducts(fetchedProducts);
    }
    loadProducts();
  }, []); // Ensure the dependency array is empty

  return (
    <section className="flex w-default">

      <div className="sm:flex sm:flex-wrap sm:gap-5 sm:max-w-screen-xl sm:mx-auto sm:justify-center">
        {products.map((product) => (
          <ProductItem key={product.uuid} product={product} /> // Pass the entire product object
        ))}
      </div>
    </section>
  );
};

export default ProductList;