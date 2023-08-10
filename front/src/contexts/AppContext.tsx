import React, { createContext, useState, useContext, useEffect } from "react";
import * as ReactIcon from "react-icons";
import { ChildrenType } from "../utils/types";
import { content } from "../content/content";

// Define the type for your context value
type AppContextValue = {
  darkMode: boolean;
  setDarkMode: () => void;
  ReactIcon: typeof ReactIcon;
};

// Create the initial context value
const initialContextValue: AppContextValue = {
  darkMode: false,
  setDarkMode: () => {},
  ReactIcon: ReactIcon,
};

export const AppContext = createContext<AppContextValue>(initialContextValue);

export const AppContextProvider: React.FC<ChildrenType> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Pass the context value to the provider
  const contextValue: AppContextValue = { setDarkMode, darkMode, ReactIcon };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
