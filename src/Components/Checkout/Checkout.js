import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import thanks from "../../images/homepage/giphy.gif";
import { Link } from 'react-router-dom';
import './Checkout.css';
const Checkout = (props) => {
    const {businessName, contactNo, flat, roadNo, address} = props.deliveryAddress;
    const { register, handleSubmit, errors } = useForm();
    const [savedBtn, setSavedBtn] = useState(false);

    const submitDeliveryAddress = data => {
        props.handleDeliveryAddress(data);
        setSavedBtn(true);   
    }
    const totalQty = props.cart.reduce((total,current)=>{
        return total+ current.quantity;
    },0);
    const subTotal = props.cart.reduce((total,current)=>{
        return total+(current.price*current.quantity);
    },0);

    const tax = ((subTotal*2.18)/100);
    const deliveryFee = totalQty && 2;
    const total = (subTotal+tax+deliveryFee);

    return (
        <div className="container pt-5 my-5">
            <div className="row mt-5">
                {/* Delivery Information display:(contactNo && flat && roadNo && address && businessName)*/}
                <div className="col-md-5">
                    <div style={{display:(contactNo && flat && roadNo && address && businessName) ? "block":"none"}} className="bgThanks">
                        <h4 className="bg-danger p-2">Thanks! Your delivery information submitted successfully. Please proceed to checkout to get the delivery on your address.</h4>
                        <img src={thanks} className="w-100" alt=""/>
                    </div>

                    <div style={{display:(contactNo && flat && roadNo && address && businessName) ? "none":"block"}}>
                        <h4>Edit Delivery Details</h4>
                        <hr/>
                        <form onSubmit={handleSubmit(submitDeliveryAddress)} className="py-5">
                            <div className="form-group">
                                <input name="businessName" className="form-control" ref={register({ required: true })} defaultValue={businessName} placeholder="Business Name"/>
                                {errors.businessName && errors.businessName.type==='required' &&<span className="error">Business Name is required</span>}
                            </div>

                            <div className="form-group">
                                <input name="contactNo" className="form-control" ref={register({ required: true, pattern:/^(?:\+88|01)?(?:\d{11}|\d{13})$/})} defaultValue={contactNo} placeholder="Contact No."/>
                                {errors.contactNo && errors.contactNo.type==='required' && <span className="error">Contact No. is required</span>}
                                {errors.contactNo && errors.contactNo.type==='pattern' && <span className="error">Contact No. must be a Bangladeshi Number.(eg.+880..|01..)</span>}
                            </div>

                            <div className="form-group">
                                <input name="flat" className="form-control" ref={register({ required: true })} defaultValue={flat} placeholder="Flat, Suite or Floor No."/>
                                {errors.flat && <span className="error">Flat No, Suite or Floor No is required</span>}
                            </div>

                            <div className="form-group">
                                <input name="roadNo" className="form-control" ref={register({ required: true })} defaultValue={roadNo} placeholder="Road No."/>
                                {errors.roadNo && <span className="error">Road No. is required</span>}
                            </div>

                            <div className="form-group">
                                <textarea name="address" ref={register({ required: true })} placeholder="Address" className="form-control" cols="30" rows="2">{address}</textarea>
                                {errors.address && <span className="error">Full Address is required</span>}
                            </div>
                            
                            <div className="form-group">
                                <button className="btn btn-danger btn-block" type="submit">Save & Continue</button>
                            </div>
                        </form>
                    </div>    
                </div>
                {/* Show Cart Item */}
                <div className="offset-md-2 col-md-5">
                    <div>
                        <h4>From <b>Gulshan Plaza Restora GPR</b></h4>
                        <h5>Arriving in 20-30 min</h5>
                        <h5>Road No: {roadNo}</h5>
                    </div>
                    {
                        props.cart.map(product => 
                            <div style={{borderRadius:"10px"}} className="mb-3 d-flex align-items-center justify-content-between bg-light">
                                <img src={product.image} alt="" width="100px"/>
                                <div>
                                    <h6>{product.name}</h6>
                                    <h4 className="text-danger">${product.price}</h4>
                                    <p className="text-secondary">Delivery Free</p>
                                </div>
                                <div className="btn ml-3" style={{width:"70px"}}>
                                    <button onClick={()=>{props.handleUpdateCart(product.key,product.quantity+1)}} className="btn font-weight-bold">
                                        +
                                    </button>
                                    <button className="btn bg-white rounded">{product.quantity}</button>
                                    {
                                        product.quantity>0?
                                        <button className="btn font-weight-bold" onClick={()=>{props.handleUpdateCart(product.key,product.quantity-1)}}>
                                            -
                                        </button>
                                        :
                                        <button disabled className="btn font-weight-bold">-</button>
                                    }
                                </div>      
                            </div>
                        )
                    }
                    {/* cart calc */}
                    <div>
                        <p className="d-flex justify-content-between"><span>Sub Total * {totalQty} Item</span> <span>${subTotal}</span></p>
                        <p className="d-flex justify-content-between"><span>Tax</span> <span>${tax.toFixed(2)}</span></p>
                        <p className="d-flex justify-content-between"><span>Delivery Fee</span> <span>${deliveryFee}</span></p>
                        <p className="h5 d-flex justify-content-between"><span>Total</span> <span>${total.toFixed(2)}</span></p>
                        {
                            (totalQty) ?
                                (savedBtn)?
                                    <Link to="/order-done">
                                        <button onClick={()=>props.clearCart()}className="btn btn-block btn-danger btn-secondary">Check Out Your Food</button>
                                    </Link>
                                :
                                <button disabled className="btn btn-block btn-secondary">Provide the Delivery Details</button>
                            :
                            <button disabled className="btn btn-block btn-secondary">Add Food On Cart!</button>

                    }
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Checkout;