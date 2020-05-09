import React, { useState, useEffect } from 'react';
import orderDone from '../../images/homepage/ordercomplete.png';
import bike from '../../images/homepage/bike.png';
import helmet from '../../images/homepage/helmet.png';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
import './OrderDone.css';

const OrderDone = (props) => {
    const [order,setOrder]= useState(null);
    const [loading,setLoading] = useState(true);
    let orderPlacedAt;
    let deliveryTime;
    
    useEffect(() => {
        setOrder(props.order);
        setLoading(false);
        console.log("Order Done ",order);
        window.scrollTo(0, 0);
    }, [props])

    if(order)
    {
        orderPlacedAt = new Date(order.placedAt);
        const hours = orderPlacedAt.getHours()%12 || 12;
        const ampm = orderPlacedAt.getHours()>12?"PM":"AM";
        orderPlacedAt.setMinutes(orderPlacedAt.getMinutes()+30);
        deliveryTime = hours+":"+orderPlacedAt.getMinutes()+ampm;
    }
    return (
        <div className="container pt-5 my-5">
            <div className="row mt-5">
                <div className="col-md-6">
                    <img src={orderDone} className="w-100" style={{height:"50%"}} alt=""/>
                </div>
                <div className="offset-md-1 col-md-5">
                    <div className="bg-light p-5 rounded">
                        <img src={bike} alt="" style={{height:"110px"}} className="ml-3"/>
                        { 
                            order ?
                                <div className="bg-white p-3 my-3 rounded order">    
                                    <p><b>Order No: </b>{order._id}</p>
                                    <h5>From</h5>
                                    <p className="text-secondary">Name: {order.user.username}</p>
                                    <h5>Your Location</h5>
                                    <p className="text-secondary">Flat: {order.deliveryAddress.flat}, Road: {order.deliveryAddress.roadNo}, Address: {order.deliveryAddress.address}</p>
                                    <h5>Your Contact No</h5>
                                    <p className="text-secondary">{order.deliveryAddress.contactNo}</p>
                                    <h5>Your Shop Address</h5>
                                    <p className="text-secondary">Gulshan Plaza Restora GPR</p>
                                </div>
                            :
                            <LoaderSpinner loader={loading}></LoaderSpinner>

                        }    
                        {
                            order ? <h2>{deliveryTime}</h2>
                            : <LoaderSpinner loader={loading}></LoaderSpinner>
                        }
                        <p className="text-secondary">Estimated Delivery Time</p>
                        <div className="bg-white rounded p-3 d-flex">
                            <img className="w-25 mr-2" src={helmet} alt=""/>
                            <div>
                                <h6>Hamim</h6>
                                <p>Your Rider</p>
                            </div>
                        </div>

                        <button className="btn btn-block my-3 btn-danger">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDone;