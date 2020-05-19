import React, { useState,useEffect } from 'react';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

const ProductDetails = (props) => {
    const {foodKey} = useParams();
    const [food,setFood] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch("https://hot-onion-backend-pulok.herokuapp.com/products-details/"+foodKey)
        .then(res=>res.json())
        .then(data=>{
            setFood(data);
            setLoading(false);
        })
        .catch(error=>{
            console.log("error: ",error);
        })
        window.scrollTo(0, 0);
    },[foodKey])
    
    const [qty,setQty] =useState(1);
    const [successMsg,setSuccessMsg] = useState(false);

    const handleAddToCart = () =>
    {
        //console.log(food);
        food.quantity = qty;
        props.handleCart(food);
        setSuccessMsg(true); 
    }
    if(successMsg){
        setTimeout(() => setSuccessMsg(false),1500);
    }

    return (
        <div className="container Details">
            <LoaderSpinner loader={loading}></LoaderSpinner>
            <div>
                <div className="row mt-5">
                    <div className="col-md-6 mt-5 pt-4">
                        <h1>{food.title}</h1>
                        <br/>
                        <br/>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.
                        </p>
                        <br/>
                        <div className="d-flex my-4">
                            <h2>${food.price}</h2>
                            <div className="cart ml-3 btn">
                                <button onClick={()=>{setQty(qty===1 ? 1:qty-1)}}className="btn">-</button>
                                <button className="btn">{qty}</button>
                                <button onClick={()=>{setQty(qty+1)}} className="btn">+</button>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <button onClick={handleAddToCart} className="btn btn-danger add-cart-btn"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add</button>
                            {
                                successMsg &&
                                <p className="ml-3 success-msg bg-success"><FontAwesomeIcon icon={faCheckCircle} /> Items Added To Cart!</p>
                            }
                        </div>
                        
                    </div>
                    <div className="col-md-6 mt-5 pt-1">
                        <img className="w-100 pl-4" src={food.image} alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <img className="w-100 small-img" src={food.image} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;