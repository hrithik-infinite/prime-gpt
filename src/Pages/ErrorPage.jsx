import React from "react";
import Header from "../common/Header";
import errorimg from "../assets/error.png";
const ErrorPage = () => {
  return (
    <div>
      <Header />
      <img src={errorimg}></img>
    </div>
  );
};

export default ErrorPage;
