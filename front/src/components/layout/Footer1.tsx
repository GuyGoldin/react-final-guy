import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const Footer1: React.FC = () => {
  const { darkMode } = useContext(AppContext);
  return (
    <footer className={` ${darkMode ? `bg-dark` : `bgc5`} p-1`}>
      <div className="shadow p-2 d-flex flex-column align-items-center justify-content-center">
        <p className={` ${darkMode ? "text-light" : "bgcl2"} ls2 mb-1 fs_12`}>
          © 2023 Your Company. All rights reserved.
        </p>
        <p
          className={`ls3  ${darkMode ? "text-light" : "bgcl2"} fs_12 fw-bold`}
        >
          Contact us: info@company.com
        </p>
      </div>
    </footer>
  );
};

export default Footer1;
