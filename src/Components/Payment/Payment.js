import React, { useState } from 'react';
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
  
const Payment = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentSuccess,setPaymentSuccess] = useState(null);
  const [paymentError,setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if(error)
    {
        setPaymentError(error.message);
        setPaymentSuccess(null);
    }
    else
    {
        setPaymentError(null);
        setPaymentSuccess(paymentMethod);
        const payment = {id:paymentMethod.id, 
            last4:paymentMethod.card.last4, 
            brand:paymentMethod.card.brand,
            exp_month: paymentMethod.card.exp_month,
            exp_year: paymentMethod.card.exp_year
        }
        props.handlePayment(payment);
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" className="btn btn-danger m-3"disabled={!stripe}>
        Pay
      </button>
      {
          paymentError && <h4 className="text-danger">{paymentError}</h4>
      }
      {
          paymentSuccess && <h4 className="text-success">Payment Successful!</h4>
      }
    </form>
  );
};

export default Payment;