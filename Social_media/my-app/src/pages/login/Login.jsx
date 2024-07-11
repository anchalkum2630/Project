import React from 'react';
import "./login.scss"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
           <h1>Welcome Here</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit neque commodi voluptate sed, fugiat unde esse voluptas illo tenetur, quidem culpa molestias sint eaque placeat aliquid dolorum optio in.</p>
           <span>Don't have an account?</span>
           <Link to="/register">
             <button>Register</button>
           </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
