import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const[credentials,setCredentials] = useState({
        username : undefined,
        email : undefined,
        password : undefined,
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setCredentials(prev=> ({...prev,[e.target.id]:e.target.value}));
    }
    const handleClick = () => {
        axios.post("auth/register",credentials);
        navigate("/login");
    }
  return (
    <div className="login">
      <div className="lContainer">
        <span className="hoteltitle">Get<span style={{color : "yellow"}}>Your</span>Trip</span>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button  className="lButton" onClick={handleClick}>
          Register
        </button>
        <p>do you have account? <Link to={"/login"}>Login</Link> </p>
        
      </div>
    </div>
  )
}

export default Register