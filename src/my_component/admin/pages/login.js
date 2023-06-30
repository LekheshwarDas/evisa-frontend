import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'

const txtStyle = {
  fontSize: '10px',
  color: 'red'
}
export const Login = ({ setLoggedin, setId }) => {
  const [_, setCookies] = useCookies(["access_token"]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotten, setForgotten] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("https://evisa-backend-10ey.onrender.com/auth/login", {
        email,
        password,
      });

      setCookies("access_token", result.data.token);
      window.localStorage.setItem("adminId", result.data.adminId);
      setId(result.data.adminId);
      
      if (result.data.adminId === undefined) {
        alert(result.data.message);
        setForgotten(true);
      } else {
        setLoggedin(true);
      }

    } catch (error) {
      console.error(error);
    }

  }

  return (
    <>
    <a class="nav-link navbar-brand fs-4 text-white bg-primary px-5 pe-5 w-100" href="/"><b>eVisa Service</b></a>
    <div className='frame justify-content-evenly'>
      <div className='login'>
        <h4><b>Admin Login</b></h4>
        <form className='needs-validation' novalidate onSubmit={handleSubmit}>
            <input
              className="form-control bg-light rounded-3 mb-3"
              type='email'
              name='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder='Enter your Email'
              required
            />
            <input
              className="form-control bg-light rounded-3 mb-3"
              type='password'
              name='password'
              placeholder='Enter your Password'
              minLength={6}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          <button type="submit" className="btn btn-outline-primary w-100">Login</button>
          {forgotten && <><hr/><a className='nav-link text-primary' onClick={()=>{alert('Your Password has been sent to your email')}}>Forgotten Password?</a></>}
        </form>

      </div>
    </div>
    </>
  )
}
