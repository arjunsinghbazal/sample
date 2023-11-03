import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Eye from "./images/eye-slash-solid 1.png";
import EyeOpen from "./images/caret-down-solid 1.png";
import logo from "./images/asymmetrik-brands 1.png";
import Image from "./images/12.png";
import Lang from "./images/caret-down-solid 1.png";

const Main = () => {
  // State to toggle password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="container">
      <div className="left">
        <img className="img1" src={logo} alt="logo" />
        <p>Find 3D Objects, Mockups and Illustration here.</p>
        <img className="img2" src={Image} alt="imge" />
      </div>
      <div className="right">
        <div className="language">
          <p>
            Language <img src={Lang} className="lang-icon" alt="language" />
          </p>
        </div>
        <div className="right-one">
          <h1>Create Account</h1>
          <div className="links-btn">
            <button className="btn">
              <div className="icon-wrapper">
                <GoogleIcon />
              </div>
              Sign up with Google
            </button>
            <button className="btn">
              <div className="icon-wrapper">
                <FacebookIcon />
              </div>
              Sign up with Facebook
            </button>
          </div>
          <p className="or">-OR-</p>
          <form>
            <input type="text" placeholder="Full name" required />
            <input type="email" placeholder="Email Address" required />
            <div className="input-container">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                required
                className="password-input"
              />
              <img
                src={passwordVisible ? EyeOpen : Eye}
                alt="eye"
                className="eye-icon"
                onClick={togglePasswordVisibility}
              />
            </div>
            <button type="submit" className="bttn">Create Account</button>
          </form>
          <p className="login-text">Already have an account? <span>Log In</span></p>
        </div>
      </div>
    </div>
  );
};

export default Main;
