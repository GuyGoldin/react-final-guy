import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Logout = () => {
 
  const nav = useNavigate();
  const AuthCtx = useContext(AuthContext);
  if (!AuthCtx.isLoggedIn) {
    return nav("/");
  } else {
    AuthCtx.logout();
    toast(`You logged out successfully`);
    setTimeout(() => {
      nav("/");
    }, 1500);
  }

  return <div>Logout</div>;
};

export default Logout;
