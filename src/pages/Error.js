import React from "react";
import Wrapper from "../assets/wrappers/ErrorPage";
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>text</h3>
        <p>text</p>
        <h1>H1</h1>
        <h2>H2</h2>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
