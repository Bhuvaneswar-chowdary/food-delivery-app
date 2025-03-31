import React, { useContext } from 'react'
import { useState } from 'react'
import './Login.css'
import { Storecontext } from '../context/context'
import axios from 'axios'

const Login = ({setshowlogin}) => {
  const { url, settoken } = useContext(Storecontext); 
  const [currstate, setcurrstate] = useState("signup")
 

  const [data, setdata] = useState({
    name: "",
    email: "",
    password: ""
  })
  const onchangehandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setdata(data=>({...data,[name]:value}))
  }

  const onlogin=async(event)=>{
    event.preventDefault()
    let NewUrl=url;
    if(currstate==="signup"){
      NewUrl+="/api/user/register"
    }
    else{
      NewUrl+="/api/user/login"
    }
    console.log(NewUrl);

    const respone=await axios.post(NewUrl,data)
    if(respone.data.success){
      settoken(respone.data.token)
      localStorage.setItem("token",respone.data.token)
      console.log("succesful login")
      setshowlogin(false)
    }
    else{
      alert(respone.data.message)
    }


  }

  

  return (
    <div className='login-popup' id='login-popup'>
      <form onSubmit={onlogin} className='login-popup-container'>
        <div className="login-title">
          <h2>{currstate}</h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" onClick={()=>setshowlogin(false)} fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </div>


        <div className="login-popup-inputs">
          {currstate==="Login"?<></>:<input name='name' onChange={onchangehandler} value={data.name} type="text"placeholder='Enter Name' required />}
          
          <input name='email' onChange={onchangehandler} value={data.email} type="email" placeholder='Enter email' required />
          <input name='password' onChange={onchangehandler} value={data.password} type="password" placeholder='password' required />
        </div>
        <button type='submit'>{currstate==="signup"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>I agree to terms and conditions of the company</p>
        </div>
        {currstate==="Login"? <p>Create a new account? <span onClick={()=>setcurrstate("signup")}>click here</span></p>
        :<p>Already have an account <span onClick={()=>setcurrstate("Login")}>Login</span></p> }
        
        
      </form>

    </div>
  )
}

export default Login
