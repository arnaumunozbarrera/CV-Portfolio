import React, { useEffect, useState, useRef } from 'react';
import NavLayout from './layouts/nav-layout';
import Hero from './components/ui/hero';
import Footer from './components/ui/footer';
import './styles/app.css';

function App() {
  
  return (
    <div
      className="div-background flex flex-col justify-between w-full h-screen bg-cover bg-center">
      {/* <NavLayout /> */}
      <Hero /> 
      <Footer />
    </div>
  );
}

export default App;