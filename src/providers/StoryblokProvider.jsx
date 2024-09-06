"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";

import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";

import Button from "@/components/nestable/Button";
import header from "@/components/nestable/Header";
import Grid from "@/components/nestable/Grid";
import Hero from "@/components/nestable/Hero";
import ImageWithText from "@/components/nestable/ImageWithText";


const components = {
  "page": Page,
  "teaser":Teaser,
  "richtext": RichTextDefault,
  "button":Button,
  "grid":Grid,
  "header":header,
  "hero":Hero,
  "imageWithText":ImageWithText,
}

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