"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";
import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";
import Category from "@/components/nestable/Category";
import Products from "@/components/content-types/Products";
import Hero from "@/components/nestable/Hero";
import ImageBanner from "@/components/nestable/ImageBanner";
import ProductDetailPage from "@/components/nestable/ProductDetailPage";
import ProductList from "@/components/nestable/ProductList";
import ProductItem from "@/components/nestable/ProductItem";
import LatestProductsHero from "@/components/nestable/LatestProductsHero";
// import Product from "@/components/nestable/ProductItem";

const components = {
  "page": Page,
  "teaser":Teaser,
  "richtext": RichTextDefault,
  "Product List": ProductList,
  "categories": Category,
  "products": Products,
  "hero": Hero,
  "image_banner": ImageBanner,
  "productdetailpage": ProductDetailPage,
  "productitem": ProductItem,
  "latest-products-hero": LatestProductsHero,
  // "product": Product
}

// hej
storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components
});

export default function StoryblokProvider({ children }) {
  return (
    children
  );
}