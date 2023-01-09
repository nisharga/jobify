import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from "./../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav className="container">
        <img src={logo} alt="logo" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            consectetur dolore tempora unde delectus ipsum quos ea distinctio
            amet, blanditiis expedita natus modi sapiente fuga totam aperiam?
            Minima, odio quasi!
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <div>
          <img src={main} alt="job-hunt" className="main-img" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
