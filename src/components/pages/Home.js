import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Featured from '../featured';
import Bestdeals from '../bestdeals';
import Carousel from '../Carousel';
import Categories from '../Categories';


function Home() {
  return (
    <>
      <Carousel />
      <Categories />
      <Featured />
      <Bestdeals />
      <Footer />
    </>
  );
}

export default Home;
