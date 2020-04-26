import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import { useParams } from 'react-router-dom';
import foodsInfo from '../foodsInfo';
import ProductItems from '../ProductItems/ProductItems';
import './Search.css';

const Search = (props) => {
    const {searchKey} = useParams();
    const food =[...foodsInfo];
    const searchFood = food.filter(fd=>fd.title.includes(searchKey));
    return (
        <div>
            <Banner></Banner>
            <section className="my-5">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <h4 className="search-border">Search Results</h4>
                    </div>
                    <div className="row justify-content-around spacing">
                        {
                            searchFood.map(pd => <ProductItems product={pd} key={pd.key} ></ProductItems>)
                        }
                    </div>
                </div>
            </section>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Search;