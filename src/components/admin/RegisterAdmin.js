import React, { useState } from "react";
import "../user/CSS/register.css"
const RegisterAdmin = () => {
  const [UserRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserRegistration({ ...UserRegistration, [name]: value });
  };
  const handleTitleClick=()=>{
    setUserRegistration({ username: "", email: "", phone: "", password: "" });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserRegistration({ username: "", email: "", phone: "", password: "" });
  };
  return (
    <div>
      <div className="container">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="signup">
            <form>
              <label htmlFor="chk" aria-hidden="true" onClick={handleTitleClick}>
                Sign up
              </label>
              <input
                autoComplete="off"
                value={UserRegistration.username}
                onChange={handleChange}
                type="text"
                name="username"
                id="username"
                required
                placeholder="Username"
              />
              <input
                type="text"
                autoComplete="off"
                value={UserRegistration.email}
                onChange={handleChange}
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              <input
                type="password"
                autoComplete="off"
                value={UserRegistration.password}
                onChange={handleChange}
                name="password"
                id="password"
                placeholder="Password"
                required
              />
              <button onClick={handleSubmit}>Sign up</button>
            </form>
          </div>

          <div className="login">
            <form>
              <label htmlFor="chk" aria-hidden="true" onClick={handleTitleClick}>
                Login
              </label>
              <input
                type="text"
                autoComplete="off"
                value={UserRegistration.email}
                onChange={handleChange}
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              <input
                type="password"
                autoComplete="off"
                value={UserRegistration.password}
                onChange={handleChange}
                name="password"
                id="password"
                placeholder="Password"  
                required
              />
              <h3 className="forget-password">forgot password?</h3>
              <button onClick={handleSubmit}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterAdmin;
