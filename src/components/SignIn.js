import React from 'react'
import { Link } from 'react-router-dom';
import data from '../data';

import './SignIn.css';

const signin = event => {
    event.preventDefault();   //this stops the page refresh
}

const register = event => {
    event.preventDefault();   //this stops the page refresh
}

function SignIn() {
    return (
        <div className="signin">
            
            <Link to='/'>
                {
                    data.logo.map( hello => 
                        <img 
                            src={ hello.signinImage} 
                            className="signin__logo"
                            alt="logo"
                        />    
                    )
                }
            </Link>
            <div className="signin__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" />
                    <h5>Password</h5>
                    <input type="password" />
                    <button type="submit" onClick={ signin } className="signin__signinButton">Sign in</button>
                </form>
                <p>
                    By signing-in you to Amazon's Conditions of
                    Use & Sale. Please see our Privacy Notice 
                    our Cookies Notice and our Internet Based Ads Notice. 
                </p>
                <button onClick={ register } className="signin__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default SignIn;
