import './Login.css'
import React, { useState } from 'react'
import amazonlogo from '../logos/amazonlogo.png'
import { Link,useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

function Login() {

  const navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const signIn=e=>{
    //To prevent refreshing
    e.preventDefault();

    //some fancy firebase login
    //goto firebase console and go to our project go to authentication and then signin method and enable email and password
    auth.signInWithEmailAndPassword(email,password)
    .then(auth=>{
      console.log(auth);
      if(auth)
      navigate("/",{replace:true})
    })


  }

  const register=e=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
      //succesfully created new user
      console.log(auth);
      if(auth){
        //after signin to direct to home page
        navigate("/",{replace:true});
      }
    })
    .catch(err=>alert(err.message))
    //do some fancy firebase register
  }

  return (


    <div className='login'>
      <Link to='/'>
        <img className='login-logo' src={amazonlogo} alt='amazon logo'/>
      </Link>
      <div className='login-container'>
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>

          <button onClick={signIn} type='submit'
          className='Signin-button'>Sign In</button>


        </form>

        <p>
          By signing in you agree to the terms and conditions
          of the amazon clone of Use and Sale.Please see out 
          privacy notice,our Cookies Notice and our Interest
          Based Ads Notice.
        </p>

        <button className='login-register' onClick={register}>
          Create your Amazon Account

        </button>

      </div>
    </div>
  )
}

export default Login