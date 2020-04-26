import React, { useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import SignUp from './Components/Auth/SignUp/SignUp';
import { AuthContextProvider, PrivateRoute } from './Components/Auth/useAuth';
import Login from './Components/Auth/Login/Login';
import Checkout from './Components/Checkout/Checkout';
import OrderDone from './Components/OrderDone/OrderDone';
import Search from './Components/Search/Search';
import NotFound from './Components/NotFound/NotFound';


function App() {
  const [cart,setCart] = useState([]);
  
  const handleCart = (addCart) => {
    
    const isAddedAlready = cart.find( pd=> pd.key === addCart.key);
    const newCart = [...cart, addCart];
    if(!isAddedAlready)
    {
      setCart(newCart);
    }
  }

  const [deliveryAddress,setDeliveryAddress] = useState({
    businessName:null, contactNo:null, flat:null, roadNo:null, address:null
  })

  const handleDeliveryAddress = (deliveryAdd) =>{
    setDeliveryAddress(deliveryAdd);
  }

  const handleUpdateCart = (key,quantity) =>{
    cart.map( product=> {
      if(product.key === key) 
      {
        product.quantity = quantity;
      }
      return product;
    })
    
    const notZeroQuantity = cart.filter(pd => pd.quantity > 0);
    setCart(notZeroQuantity);
  }

  const clearCart = () => setCart([]);

  return (
    <div className="base">
      <AuthContextProvider>  
       <Router>
        <Switch>
          <Route exact path="/">
            <Header cart = {cart}></Header>
            <Home cart={cart}></Home>
            <Footer></Footer>
          </Route>
          <Route path="/search/:searchKey">
            <Header cart = {cart}></Header>
            <Search></Search>
            <Footer></Footer>
          </Route>
          <Route path="/food/:foodKey">
            <Header cart = {cart}></Header>
            <ProductDetails handleCart={handleCart}></ProductDetails>
            <Footer></Footer>
          </Route>
          <Route path="/sign-in">
            <Header cart = {cart}></Header>
            <SignUp></SignUp>
            <Footer></Footer>
          </Route>
          <Route path="/login">
            <Header cart = {cart}></Header>
            <Login></Login>
            <Footer></Footer>
          </Route>
          <PrivateRoute path="/checkout">
            <Header cart = {cart}></Header>
            <Checkout cart={cart} handleUpdateCart={handleUpdateCart} deliveryAddress={deliveryAddress} handleDeliveryAddress={handleDeliveryAddress} clearCart={clearCart}></Checkout>
            <Footer></Footer>
          </PrivateRoute>
          <PrivateRoute path="/order-done">
            <Header cart = {cart}></Header>
            <OrderDone deliveryAddress={deliveryAddress}></OrderDone>
            <Footer></Footer>
          </PrivateRoute>
          <Route path="*">
              <Header cart={cart}></Header>
              <NotFound></NotFound>
              <Footer></Footer>
          </Route>
        </Switch>
       </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
