import React, { useState } from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
const Banner = () => {
    const [queryProduct,setQueryProduct]=useState(null);

    const getQueryProduct = event=>{
        setQueryProduct(event.target.value);
    }
    return (
        <div>
            <section className="banner d-flex align-items-center text-center">
                <div className="container">
                    <h1>Best Food Waiting For Your Belly</h1>
                    <div className="col-md-6 my-5 mx-auto">
                        <input id="queryProduct" onChange={getQueryProduct} type="search" name="" className="form-control" placeholder="Search Food Items"/>
                        <Link to={"/search/"+queryProduct}>
                            <button onClick={()=>window.scrollBy(0,450)}className="btn btn-danger search-btn ">Search</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;