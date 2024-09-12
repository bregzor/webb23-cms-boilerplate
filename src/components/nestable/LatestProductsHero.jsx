"use client";
import React, { useEffect, useState } from 'react';
import { fetchNewestProducts } from "../../app/lib/storyblok";
import ProductItem from '@/components/nestable/ProductItem';

const Hero = () => {
  const [newestProducts, setNewestProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNewestProducts() {
      const fetchedProducts = await fetchNewestProducts();
      setNewestProducts(fetchedProducts);
      setLoading(false);
    }
    loadNewestProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="flex flex-col items-center w-full p-8">
      <h1 className="text-3xl font-bold mb-6">Newest Products</h1>
      <div className="flex flex-wrap justify-center gap-5 max-w-screen-xl">
        {newestProducts.map((product) => (
          <ProductItem key={product.uuid} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Hero;