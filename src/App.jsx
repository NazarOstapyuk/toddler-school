import React from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Studios from './components/Studios';
import Reviews from './components/Reviews';
import Team from './components/Team';
import Documents from './components/Documents';
import Footer from './components/Footer';

function App() {
  return (
    <Box>
      <Header />
      <main>
        <Box id="about">
          <Hero />
        </Box>
        <Box id="advantages">
          <Advantages />
        </Box>
        <Box id="studios">
          <Studios />
        </Box>
        <Box id="reviews">
          <Reviews />
        </Box>
        <Box id="team">
          <Team />
        </Box>
        <Box id="documents">
          <Documents />
        </Box>
      </main>
      <Box id="contact">
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
