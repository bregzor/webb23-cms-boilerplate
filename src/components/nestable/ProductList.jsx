"use client";
import React, { useEffect, useState } from 'react';
import { fetchProducts, fetchProductsByCategory, fetchHomePageContent } from '@/app/lib/storyblok';
import ProductItem from '@/components/nestable/ProductItem';
import Category from '@/components/nestable/Category';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    async function loadContent() {
      const fetchedHomeContent = await fetchHomePageContent();
      console.log('Fetched Home Content:', fetchedHomeContent);
      const fetchedCategories = fetchedHomeContent?.categories || [];
      console.log('Fetched Categories:', fetchedCategories);
      setCategories(fetchedCategories);

      const fetchedProducts = selectedCategory
        ? await fetchProductsByCategory(selectedCategory)
        : await fetchProducts();
      console.log('Fetched Products:', fetchedProducts);
      setProducts(fetchedProducts);
    }
    loadContent();
  }, [selectedCategory]);

  const handleCategoryClick = (categorySlug) => {
    setSelectedCategory(categorySlug);
  };

  return (
    <section className="flex flex-col w-default">
      <div className="flex justify-center mb-4">
        {categories.map((category) => (
          <Category
            key={category}
            blok={{ name: category, slug: category }}
            onClick={handleCategoryClick}
            isSelected={selectedCategory === category}
          />
        ))}
      </div>
      <div className="sm:flex sm:flex-wrap sm:gap-5 sm:max-w-screen-xl sm:mx-auto sm:justify-center">
        {products.map((product) => (
          <ProductItem key={product.uuid} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;