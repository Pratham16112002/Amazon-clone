import React from 'react'
import './Login.css'
import { Link , useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
              navigate('/')
            })
            .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();
        auth
          .createUserWithEmailAndPassword(email,password)
          .then((auth) => {
            // It successfully create a new user with email and password
            console.log(auth)
            if (auth) {
              navigate('/')
            }
          })
          .catch(error => alert(error.message))
    }
  return (
    
    <div className='login'>
        <Link to='/'>
          <img className='login__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="" />
          </Link>
          <div className="login__container">
            <h1>Sign in</h1>

            <form action="">
                <h5>Email</h5>
                <input value={email} onChange={e => setEmail(e.target.value)} type='text'/>
                <h5>Password</h5>
                <input value={password} onChange={e => setPassword(e.target.value)}type='password'/>
                <button onClick={signIn}
                 className='login__signInButton'>Sign In</button>
            </form>
            <p>
                  By Signing in , you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>
            <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
          </div>
    </div>
  )
}

export default Login