import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  
  const[credentials,setCredentials] = useState({
    username : undefined,
    password : undefined,
  })
  const{user,loading,error,dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials(prev=> ({...prev,[e.target.id]:e.target.value}));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({type : "LOGIN_START"});
    try {
      const res = await axios.post("auth/login",credentials);
      dispatch({type : "LOGIN_SUCCESS" , payload : res.data});
      navigate("/");
    } catch (err) {
      dispatch({type : "LOGIN_FAILURE" ,payload : err.response.data});
    }
  }

  console.log(user);
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
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        <p>don't  have account? <Link to={"/register"}>Register</Link> </p>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;