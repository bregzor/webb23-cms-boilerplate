import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductItem from '@/components/nestable/ProductItem';
import { fetchProductBySlug } from '@/app/lib/storyblok';

const ProductDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchProductBySlug(slug).then((data) => {
        setProduct(data);
        setLoading(false);
      }).catch((error) => {
        console.error('Error fetching product:', error);
        setLoading(false);
      });
    }
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  const { content: blok } = product;

  return (
    <div className="w-full flex justify-center">
      <div className="border border-gray-300 rounded-lg p-8 m-4 text-center transition-shadow duration-300 ease-in-out hover:shadow-lg w-full max-w-2xl">
        <div className="mb-4">
          <h2 className="text-3xl font-semibold mb-2">{blok.title}</h2>
        </div>
        <div className="mb-4">
          <img
            className="w-full h-auto object-cover rounded-lg mx-auto"
            src={blok.image.filename}
            alt={blok.image.alt || blok.name}
          />
        </div>
        <div className="mb-4 text-left">
          <p>{blok.description}</p>
        </div>
        <div>
          <p className="font-bold text-gray-800 text-2xl">Priceeeee: ${blok.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;