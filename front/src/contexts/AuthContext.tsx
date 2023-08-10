import React, { createContext, useState, useContext, useEffect } from "react";
import { ChildrenType } from "../utils/types";

type AuthContextValue = {
  logout: () => void;
  login: (token: string, roles: [], email: string, userId: string) => void;
  isLoggedIn: boolean;
  isAdmin: boolean;
  token:string
};

const initialContextValue: AuthContextValue = {
  logout: () => {},
  login: (token, roles, _email, userId) => {},
  isLoggedIn: false,
  isAdmin: false,
  token:``
};

export const AuthContext = createContext<AuthContextValue>(initialContextValue);

export const AuthContextProvider: React.FC<ChildrenType> = ({ children }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState(``);
const userDetailsLocalStorage = JSON.parse(localStorage.getItem(`userDetails`))
  useEffect(() => {
    const isLoggedInStorage = localStorage.getItem("isLoggedIn");
    if (isLoggedInStorage) {
      setisLoggedIn(true);
    } else {
      setisLoggedIn(false);
    }
  }, []);

  useEffect(()=>{
if(userDetailsLocalStorage?.roles?.includes(`admin`)){
 setIsAdmin(true)
}

  },[userDetailsLocalStorage])

  const login = (
    token: string,
    roles: [],
    email: string,
    userId: string,
    name: string
  ) => {
    const loginObj = {
      name,
      token,
      roles,
      email,
      userId,
    };

    const loginObjJSON = JSON.stringify(loginObj);
    setisLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userDetails", loginObjJSON);
    localStorage.setItem("token", loginObj.token);
  };

  const logout = () => {
    setisLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    localStorage.setItem("userDetails", null);
  };
  const contextValue: AuthContextValue = { isLoggedIn, login, logout,isAdmin };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
