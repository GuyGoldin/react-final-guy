import React from "react";
import logo from "../../assets/images/logo/logo-no-background.png";
const Logo = ({ size,onPress }) => {
  return (
    <img onClick={onPress}
      className="p-2"
      src={logo}
      style={{ width: `${size}%`, height: `${size}%` }}
      alt=""
    />
  );
};

export default Logo;
