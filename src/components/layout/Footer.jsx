"use client";
import React, { useState } from 'react';
import Link from 'next/link'; // Adjust the import path based on your routing library

const Footer = ({ config }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showError, setShowError] = useState(false);
  const [email, setEmail] = useState('');

  if (!config) {
    return null; // or a loading spinner
  }

  // Access the first element of the footer array
  const footerConfig = config.content.footer[0];
  const { help_link_block, shop_link_block, about_link_block, newsletter_desc, newsletter_headline, newsletter_input } = footerConfig;

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && emailRegex.test(email)) {
      setShowConfirmation(true);
      setShowError(false);
      setTimeout(() => setShowConfirmation(false), 3000); // Hide confirmation after 3 seconds
      setEmail(''); // Clear the email input
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000); // Hide error after 3 seconds
    }
  };

  return (
    <footer className="bg-white text-black py-8 px-20 pb-40 border-t border-gray-300 mx-40"> {/* Added mx-8 for margin on both sides */}
      <div className="flex justify-between">
        
        {/* Newsletter Section */}
        <div className="w-1/5">
          <h3 className="text-4xl font-bold">{newsletter_headline}</h3>
          <p className="text-m">{newsletter_desc}</p>
          {newsletter_input.length > 0 && (
            <form className="mt-4 flex" onSubmit={handleSubmit}>
              <div className="flex border border-black w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={newsletter_input[0].newsletter_input_placeholder}
                  className="px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white flex-grow"
                />
                <button
                  type="submit"
                  className="bg-white text-black px-4 py-2 hover:bg-gray-200"
                >
                  {newsletter_input[0].newsletter_button_text}
                </button>
              </div>
            </form>
          )}
          {showConfirmation && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 border border-green-400">
              Thank you for signing up!
            </div>
          )}
          {showError && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 border border-red-400">
              Please enter a valid email address.
            </div>
          )}
        </div>

        {/* Links Section */}
        <div className="w-2/5 flex justify-around">
          
          {/* Shop Links */}
          <div>
            <h3 className="text-xl font-bold mb-4"> {/* Added mb-2 for spacing */}
              <Link href={shop_link_block[0].shop_link.cached_url} className="hover:underline">
                {shop_link_block[0].shop_link.cached_url.charAt(0).toUpperCase() + shop_link_block[0].shop_link.cached_url.slice(1)}
              </Link>
            </h3>
            {shop_link_block[0].shop_links.map((link, index) => (
              <Link key={index} href={`/products/${link}`} className="block text-sm text-gray-600 hover:underline"> {/* Added text-gray-600 for light gray color */}
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            ))}
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-xl font-bold mb-4"> {/* Added mb-2 for spacing */}
              <Link href={help_link_block[0].help_link.cached_url} className="hover:underline">
                {help_link_block[0].help_link.cached_url.charAt(0).toUpperCase() + help_link_block[0].help_link.cached_url.slice(1)}
              </Link>
            </h3>
            {help_link_block[0].help_links.map((link, index) => (
              <Link key={index} href={link} className="block text-sm text-gray-600 hover:underline"> {/* Added text-gray-600 for light gray color */}
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            ))}
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-xl font-bold mb-4"> {/* Added mb-2 for spacing */}
              <Link href={about_link_block[0].about_link.cached_url} className="hover:underline">
                {about_link_block[0].about_link.cached_url.charAt(0).toUpperCase() + about_link_block[0].about_link.cached_url.slice(1)}
              </Link>
            </h3>
            {about_link_block[0].about_links.map((link, index) => (
              <Link key={index} href={link} className="block text-sm text-gray-600 hover:underline"> {/* Added text-gray-600 for light gray color */}
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;