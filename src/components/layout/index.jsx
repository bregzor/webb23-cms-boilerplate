import React from 'react';
import Header from './Header';
import Footer from './Footer';

// Uses config set global components for the layout
export default function Layout({ config, children }) {
  console.log('Layout Config:', config);

  return (
    <>
      <header><Header config={config} /></header>
      <main>{children}</main>
      <footer><Footer config={config} /></footer>
    </>
  );
}