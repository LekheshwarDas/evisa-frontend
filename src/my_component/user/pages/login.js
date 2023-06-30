import React, { useState } from 'react';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
export const Login = ({ setLoggedin, handleSignup, setSelectedUser }) => {
  const [_, setCookies] = useCookies(["access_token"]);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("https://evisa-backend-10ey.onrender.com/auth-user/login",{
        email,
        password,
      });

      // setCookies("access_token", result.data.token);
      // window.localStorage.setItem("userId",result.data.userId);
      
      if(result.data._id===undefined){
        alert(result.data.message);
      } else{
        const user = result.data;
        setSelectedUser(user);
        setLoggedin(true);
      }
     
    } catch (error) {  
      console.error(error);
    }
  }

  return (
    <>
    <a className="nav-link navbar-brand fs-4 text-white bg-primary px-5 pe-5 w-100" href="/"><b>eVisa Service</b></a>
    <div className='frame justify-content-evenly'>
      <div className='login'>
        <h4><b>User Login</b></h4>
        <form onSubmit={handleSubmit}>
          <input 
          className="form-control rounded-3 mb-3" 
          type='text' 
          name='email'
          id= "email"
          value={email}
          onChange={(event)=> setEmail(event.target.value)} 
          placeholder='Enter your Email' 
          />
          <input 
          className="form-control rounded-3 mb-3" 
          type='password' 
          name='password' 
          placeholder='Enter your Password'
          id= "password"
          value={password}
          onChange={(event)=> setPassword(event.target.value)} 
          />
          <button type="submit" className="btn btn-outline-primary w-100">Login</button>
        </form>
        <p>New Registration? <a type="submit" className="underline my-2" onClick={handleSignup}>Register now</a></p>
      </div>
    </div>
    </>
  )
}
