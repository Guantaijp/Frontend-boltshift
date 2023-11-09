import React from 'react';
import Category from './Category';
import Hotdeals from './Hotdeals';
import FeaturedProduct from './FeaturedProduct';
import SpecialOffer from './SpecialOffer';
import Popular from './Popular';
import Brand from './Brand';
import Trending from './Trending';
import PopularReview from './PopularReview';
import Navbar from '../Navbar';
import Footer from '../Footer';
import SpecialMobile from "./SpecialMobile.tsx";
// import HeroWeb from './HeroWeb.tsx'

const Hero: React.FC = () => {

  return (

    <>
      <div
          style={{
            maxWidth: '1280px',
          }}
          className='container'>
        <Navbar />
        {/*<HeroWeb />*/}
        {/*<HeroMobile/>*/}
        <Category />
        <Hotdeals />
        <FeaturedProduct />
        <SpecialOffer />
        <SpecialMobile/>
        <Brand />
        <Popular />
        <Trending />
        <PopularReview />
        <Footer />
      </div>
    </>
  );
};

export default Hero;

