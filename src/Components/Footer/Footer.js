import React from 'react';
import './Footer.css';
import whiteLogo from '../../images/homepage/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="mt-3">
        <footer className="bg-dark py-3">
            <div className="container">
                <div className="row footer-top py-5">
                    <div className="col-md-6 mb-5">
                        <img src={whiteLogo} className="w-50 h-75" alt="Red Onion"/>
                    </div>
                    <div className="col-md-3">
                        <ul className="list-unstyled">
                            <li><Link to="/">About Online Food</Link></li>
                            <li><Link to="/">Read Our Blog</Link></li>
                            <li><Link to="/login">Sign Up to delivery</Link></li>
                            <li><Link to="/">Add your restaurant</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="list-unstyled">
                            <li><Link to="/">Get Help</Link></li>
                            <li><Link to="/">Read FAQ</Link></li>
                            <li><Link to="/">View All Cities</Link></li>
                            <li><Link to="/">Restaurants near me</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom d-flex justify-content-between">
                    <small className="text-secondary">Copyright &copy; 2020 Red Onion Foods</small>
                    <ul className="list-inline">
                        <li className="list-inline-item ml-3"><Link to="/">Privacy Policy</Link></li>
                        <li className="list-inline-item ml-3"><Link to="/">Terms of Use</Link></li>
                        <li className="list-inline-item ml-3"><Link to="/">Pricing Policy</Link></li>
                    </ul>
                </div>
                <div className="footer-copyright text-center py-3 text-danger">Developed By <cite>Sabbir Pulok</cite>
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;