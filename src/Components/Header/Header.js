import React from 'react';
import './Header.css';
import logo from '../../images/homepage/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import { useAuth } from '../Auth/useAuth';

const Header = (props) => {
    const auth = useAuth();
    //console.log(auth.user);
    return (
        
            <nav className="navbar fixed-top bg-white">
                <div className="container-fluid Header">
                    <Link to="/">
                        <img src={logo} alt=""/>
                    </Link>
                    <div className="navRight">
                        <Link to="/checkout">
                            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon><span className="badge bg-light">{props.cart.length}</span>
                        </Link>
                        {
                            auth.user?
                            <button className="btn">{auth.user.name}</button>
                            :
                            <Link to="login">
                                <button className="btn">Log In</button>
                            </Link>
                        }
                        
                        {
                            auth.user?
                            <button onClick={()=>auth.signOut()}className="btn btn-danger">Sign Out</button>
                            :
                            <Link to="sign-in">
                                <button className="btn btn-danger">Sign In</button>
                            </Link>
                        }
                    </div> 
                </div>
            </nav>
        
        
    );
};

export default Header;