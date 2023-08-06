import React, { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext.js';


const Navbar = () => {
  const { user,dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({type : "LOGOUT"});
    navigate("/");
  }
  return (
    <div className='navbar'>
        <div className="navcontainer">
            <Link to={"/"} style={{color: "inherit", textDecoration : "none"}}>
              <span className='logo'>GetyourTrip</span>
            </Link>
            {user?
                <div className="logout">
                  <span className='usernamedisplay'>{ user.username }</span>
                  <button onClick={handleClick} className='logoutbtn'>Logout</button>
                </div> 
                :<div className="navitem">
                <Link to={"/login"}>
                  <button className='navbutton'>Login</button>
                </Link>
                <Link to={"/register"}>
                  <button className='navbutton'>Register</button>
                </Link>
            </div>}
        </div>
    </div>
  )
}

export default Navbar