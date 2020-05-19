import React from 'react';
import './ProductItems.css';
import {Link} from "react-router-dom";

const ProductItems = (props) => {
    const {key,title,phrase,price,image} = props.product;
    return (
        <Link to={"/products-details/"+key} style={{textDecoration : "none"}}>
            <div className="col-md-6 product-items">
                <div className="card text-center">
                    <img src={image} className="card-image-top" alt=""/>
                    <div className="card-body">
                        <h5>{title}</h5>
                        <p>{phrase}</p>
                        <h4>${price}</h4>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductItems;