import React, { useContext, useState } from "react";
import Navbar from "../sections/nav-bar/Navbar";
import Logo from "../ui/Logo";
import { BsSearch } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { Col, Row } from "react-bootstrap";
import { AppContext } from "../../contexts/AppContext";
import UserHeader from "../sections/user/UserHeader";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const Header1 = () => {
  const AuthCtx = useContext(AuthContext);
  const [openMenu, setOpenMenu] = useState(false);
  const { darkMode, setDarkMode } = useContext(AppContext);
  const nav = useNavigate()
  return (
    <div
      className={`${
        darkMode ? "bg-dark" : `bg-light`
      } w-100 d-flex flex-row align-items-center `}
    >
      <Row className="align-items-center justify-content-xl-between gap-5">
        <Col>
          <Logo onPress={()=>nav('/')} size={100} />
        </Col>
        <Col
          style={{ color: darkMode ? "white" : `black` }}
          className="d-flex gap-1 "
        >
          <BsSearch size={30} />
          <AiOutlineShoppingCart size={30} />

          {darkMode ? (
            <span className="cursor" onClick={() => setDarkMode(false)}>
              <MdOutlineDarkMode size={30} />
            </span>
          ) : (
            <span className="cursor" onClick={() => setDarkMode(true)}>
              <MdDarkMode size={30} />
            </span>
          )}
        </Col>
      </Row>{" "}
      <Navbar />
      {AuthCtx.isLoggedIn && <UserHeader />}
    </div>
  );
};
export default Header1;
