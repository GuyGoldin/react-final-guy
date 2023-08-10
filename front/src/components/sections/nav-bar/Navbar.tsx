import React, { useState, useContext } from "react";
import { useContentContext } from "../../../contexts/ContentContext";
import { FcMenu } from "react-icons/fc";
import { AuthContext } from "../../../contexts/AuthContext";
const Navbar = () => {
  const AuthCtx = useContext(AuthContext);
  const [showMenu, setshowMenu] = useState(false);
  const { contentList } = useContentContext();
  const { menu } = contentList;
  return (
    <div className="w-100">
      <p
        onClick={() => setshowMenu((s) => !s)}
        className="text-center mb-1  p-1"
      >
        <FcMenu style={{ color: "white" }} size={30} />
      </p>
      {showMenu && (
        <div className="row justify-content-center text-center ">
          {menu?.items?.map((item, i) => {
            if (item?.unLoggedOnly && AuthCtx.isLoggedIn) {
              return;
            } else if (item?.loggedOnly && AuthCtx.isLoggedIn === false) {
              return;
            }

            return (
              <div className="col   bgc1 p-2" key={i}>
                <a
                  style={{ width: `100%` }}
                  className=" bgc2 w_100 p-1 fs_color1 text-black dec-off"
                  href={item.href}
                >
                  {item.text}
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
