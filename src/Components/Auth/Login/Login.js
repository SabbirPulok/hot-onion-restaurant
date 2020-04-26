import React from 'react';
import logo from '../../../images/homepage/logo2.png';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../useAuth';
import '../SignUp/SignUp.css';

const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    const  auth = useAuth();

    const loginSubmit = newUser => {
        if(newUser.email &&newUser.password)
        {
            auth.logIn(newUser.email,newUser.password)
            .then(()=>{
                window.history.back();
            })
        }
    }

    return (
        <div className="SignUp">
            <div className="container">
                <div className="logo text-center">
                    <Link to="/">
                        <img src={logo} alt=""/>
                    </Link>
                </div>
            </div>
            <form onSubmit={handleSubmit(loginSubmit)} className="py-5">
               { auth.user !== null && <p className="text-danger">- {auth.user.error}</p>}
                <div className="form-group">
                    <input name="email" className="form-control" ref={register({ required: true})} placeholder="Email"/>
                    {errors.email && errors.email.type === 'required' && <span className="error">Email is required</span>}
                </div>

                <div className="form-group">
                    <input type="password" name="password" className="form-control" ref={register({ required: true})} placeholder="Password" />
                    {errors.password && errors.password.type ==='required' && <span className="error">Password is required</span>}
                </div>

                <div className="form-group">
                    <button className="btn btn-danger btn-block" type="submit">Log In</button>
                </div>
                <div className="option text-center">
                    <Link to="/sign-in">
                        <label className="text-danger">Create a new account</label>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;