"use client";
import React from 'react';

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
          <div className="relative text-gray-600 hover:text-gray-900 flex items-center">
            <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Header;