import  '../assets/scss/main.scss'
import { createRoot } from 'react-dom/client';
import React, { useEffect, useRef } from 'react';
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { MainContent } from '../components/MainContent.js';

const App = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
};

createRoot(document.getElementById('root')).render(<App />);