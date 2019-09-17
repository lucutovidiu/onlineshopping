import React from "react";
import SignIn from "../frontend/components/signInComponent/SignIn";
import Navbar from "../frontend/components/navbar/navbar";

const login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <SignIn />
    </div>
  );
};

export default login;
