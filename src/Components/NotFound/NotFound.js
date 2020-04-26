import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="Footer d-flex align-items-center">
            <div className="container">
                <div className="text-center">
                    <div className="space">
                        <h3>Oops!</h3>
                        <h1>404 </h1>
                        <h2>Page Not Found 😥</h2>
                        <Link to="/">
                            <button className="btn btn-danger btn-rounded p-3 mt-2">Back To Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default NotFound;