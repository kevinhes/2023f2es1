import  '../assets/scss/main.scss'
import { createRoot } from 'react-dom/client';
import React from 'react';
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

const App = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

createRoot(document.getElementById('root')).render(<App />);