"use client";
import React from 'react';
import Search from '@/components/nestable/Search'; // Import the Search component

const Header = ({ config }) => {
  if (!config) {
    return null; // or a loading spinner
  }

  // Access the first element of the header array
  const headerConfig = config.content.header[0];
  const { currency, promoText, supportLink, siteTitle, navLinks = [] } = headerConfig;

  return (
    <>
      <style jsx>{`
        .promo-container {
          overflow: hidden;
          white-space: nowrap;
        }

        .promo-text {
          display: inline-block;
          padding-left: 1%;
          animation: scroll 10s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
      <header className="bg-black text-white py-4 px-20 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-sm font-medium">{currency}</span>
        </div>
        <div className="text-center promo-container">
          <p className="text-sm font-medium promo-text">{promoText}</p>
        </div>
        <div>
          <a href={supportLink} className="text-sm font-medium hover:underline">{supportLink.charAt(0).toUpperCase() + supportLink.slice(1)}</a>
        </div>
      </header>
      <header className="bg-white-100 py-4 px-20 flex items-center space-x-10">
        <a href="/" className="text-gray-600 hover:text-gray-900">
          <h1 className="text-2xl font-bold">{siteTitle}</h1>
        </a>
        <div className="flex items-center space-x-4">
          {navLinks.map((link, index) => (
            <a key={index} href={`/${link}`} className="text-gray-600 hover:text-gray-900">
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Search /> {/* Use the Search component */}
        </div>
      </header>
      <hr />
    </>
  );
};

export default Header;