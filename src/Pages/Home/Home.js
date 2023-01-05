import React from 'react';
import Hero from './Hero';
import Info from './Info';
import Promo from './Promo';
import Services from './Services';

const Home = () => {
    return (
        <div className=''>
            <Hero></Hero>
            <Info></Info>
            <Services></Services>
            <Promo></Promo>
        </div>
    );
};

export default Home;