import React from 'react';
import logo from '../../../images/homepage/logo2.png';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../useAuth';
import './SignUp.css';

const SignUp = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const  auth = useAuth();

    const signSubmit = newUser => {
        if(newUser.name && newUser.email &&newUser.password && newUser.confirm_password)
        {
            auth.signUp(newUser.name,newUser.email,newUser.confirm_password)
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
            <form onSubmit={handleSubmit(signSubmit)} className="py-5">
               { auth.user !== null && <p className="text-danger">- {auth.user.error}</p>}
                <div className="form-group">
                    <input name="name" className="form-control" ref={register({ required: true })} placeholder="Name" />                    
                    {errors.name && errors.name.type === 'required' && <span>Name is required</span>}
                </div>

                <div className="form-group">
                    <input name="email" className="form-control" ref={register({ required: true, pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})} placeholder="Email"/>
                    {errors.email && errors.email.type === 'required' && <span className="error">Email is required</span>}
                    {errors.email && errors.email.type === 'pattern' && <span>Email Format Invalidate. eg.developer@gmai.com </span> }
                </div>

                <div className="form-group">
                    <input type="password" name="password" className="form-control" ref={register({ required: true, pattern: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/ })} placeholder="Password min length 6,alphanumeric,special character." />
                    {errors.password && errors.password.type ==='required' && <span className="error">Password is required</span>}
                    {errors.password && errors.password.type === 'pattern' && <span>Password minimum length 6, one letter, one number and one special character required.</span> }
                </div>

                <div className="form-group">
                    <input type="password" name="confirm_password" className="form-control" ref={register({
                    validate: (value) => value === watch('password')
                    })} placeholder="Confirm Password" />
                    {errors.confirm_password && <span className="error">Passwords don't match.</span>}
                </div>

                <div className="form-group">
                    <button className="btn btn-danger btn-block" type="submit">Sign Up</button>
                </div>
                <div className="option text-center">
                    <Link to="/login">
                        <label className="text-danger">Already Have an Account</label>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SignUp;