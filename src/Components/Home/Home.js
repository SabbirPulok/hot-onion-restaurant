import React from 'react';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import ChooseUs from '../ChooseUs/ChooseUs';

const Home = (props) => {
    return (
            <div>
                <Banner></Banner>
                <Product cart={props.cart}></Product>
                <ChooseUs></ChooseUs>
            </div>
            
    );
};

export default Home;