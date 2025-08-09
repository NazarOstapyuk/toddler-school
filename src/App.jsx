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
        <Hero />
        <Box id="about">
          <Advantages />
        </Box>
        <Studios />
        <Reviews />
        <Team />
        <Documents />
      </main>
      <Footer />
    </Box>
  );
}

export default App;
