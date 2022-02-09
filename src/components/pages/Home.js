import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import Featured from '../featured';
import Bestdeals from '../bestdeals';
import Carousel from '../Carousel';


function Home() {
  return (
    <>
      <Carousel />
      <Cards />
      <Featured />
      <Bestdeals />
      <Footer />
    </>
  );
}

export default Home;
