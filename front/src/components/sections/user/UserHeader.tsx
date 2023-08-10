import React, { useContext, useState,useEffect } from "react";
import { BiUserCircle } from "react-icons/bi";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const UserHeader = () => {
  const AuthCtx = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const nav = useNavigate();


  
  const { email, name, roles, token, userId } = userDetails ?? "";
  return (
    <div className="m-2 p-1 d-flex flex-column align-items-center gap-1">
      <span onClick={() => setIsOpen((s) => !s)} className="btn1 p-1 radius3">
        <BiUserCircle size={30} />
      </span>
      {isOpen && (
        <div className="p-1">
          <div className="bgc1 d-flex align-items-center flex-column justify-content-center p-3 text-light  radius2">
            <span className="fs_12  text-black fw-bold radius1 p-2">
              Welcome {name}
            </span>
            {AuthCtx.isAdmin && 
        <span>Admin</span>
            }

              <button onClick={() => nav("/logout")} className="btn1 p-1 fs_15">
                Logout
              </button>
       
          </div>
        </div>
      )}
    </div>
  );
};

export default UserHeader;
