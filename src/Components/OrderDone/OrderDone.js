import React from 'react';
import orderDone from '../../images/homepage/ordercomplete.png';
import bike from '../../images/homepage/bike.png';
import helmet from '../../images/homepage/helmet.png';
import { useAuth } from '../Auth/useAuth';
import './OrderDone.css';

const OrderDone = (props) => {
    const {contactNo,address,flat,roadNo} = props.deliveryAddress;
    const auth = useAuth();
    const localtime = new Date();
    localtime.setMinutes(localtime.getMinutes()+30)
    const deliveryTime = localtime.getHours()+":"+localtime.getMinutes();
    return (
        <div className="container pt-5 my-5">
            <div className="row mt-5">
                <div className="col-md-6">
                    <img src={orderDone} className="w-100" style={{height:"50%"}} alt=""/>
                </div>
                <div className="offset-md-1 col-md-5">
                    <div className="bg-light p-5 rounded">
                        <img src={bike} alt="" style={{height:"110px"}} className="ml-3"/>
                        <div className="bg-white p-3 my-3 rounded order">    
                            <h5>Order From</h5>
                            <p className="text-secondary">Name: {auth.user.name}</p>
                            <h5>Your Location</h5>
                            <p className="text-secondary">Flat:{flat}, Road:{roadNo}, Address:{address}</p>
                            <h5>Your Contact No</h5>
                            <p className="text-secondary">{contactNo}</p>
                            <h5>Your Shop Address</h5>
                            <p className="text-secondary">Gulshan Plaza Restora GPR</p>
                        </div>    
                        <h2>{deliveryTime}</h2>
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