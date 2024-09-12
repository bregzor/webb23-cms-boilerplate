"use client";
import React from 'react';
import Link from 'next/link'; // Adjust the import path based on your routing library

const Footer = ({ config }) => {
  if (!config) {
    return null; // or a loading spinner
  }

  // Access the first element of the footer array
  const footerConfig = config.content.footer[0];
  const { help_link_block, shop_link_block, about_link_block, newsletter_desc, newsletter_headline, newsletter_input } = footerConfig;

  return (
    <footer className="bg-gray-800 text-white py-8 px-20">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-bold">
            <Link href={help_link_block[0].help_link.cached_url} className="hover:underline">
              {help_link_block[0].help_link.cached_url.charAt(0).toUpperCase() + help_link_block[0].help_link.cached_url.slice(1)}
            </Link>
          </h3>
          {help_link_block.map((block) => (
            <Link key={block._uid} href={block.help_link.cached_url} className="block text-sm hover:underline">
              {block.help_link.cached_url.charAt(0).toUpperCase() + block.help_link.cached_url.slice(1)}
            </Link>
          ))}
        </div>
        <div>
          <h3 className="text-lg font-bold">
            <Link href={shop_link_block[0].shop_link.cached_url} className="hover:underline">
              {shop_link_block[0].shop_link.cached_url.charAt(0).toUpperCase() + shop_link_block[0].shop_link.cached_url.slice(1)}
            </Link>
          </h3>
          {shop_link_block[0].shop_links.map((link, index) => (
            <Link key={index} href={`/products/${link}`} className="block text-sm hover:underline">
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          ))}
        </div>
        <div>
          <h3 className="text-lg font-bold">
            <Link href={about_link_block[0].about_link.cached_url} className="hover:underline">
              {about_link_block[0].about_link.cached_url.charAt(0).toUpperCase() + about_link_block[0].about_link.cached_url.slice(1)}
            </Link>
          </h3>
          {about_link_block.map((block) => (
            <Link key={block._uid} href={block.about_link.cached_url} className="block text-sm hover:underline">
              {block.about_link.cached_url.charAt(0).toUpperCase() + block.about_link.cached_url.slice(1)}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold">{newsletter_headline}</h3>
        <p className="text-sm">{newsletter_desc}</p>
        {newsletter_input.length > 0 && (
          <form className="mt-4">
            <input
              type="email"
              placeholder={newsletter_input[0].newsletter_input_placeholder}
              className="rounded-md px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              {newsletter_input[0].newsletter_button_text}
            </button>
          </form>
        )}
      </div>
    </footer>
  );
};

export default Footer;