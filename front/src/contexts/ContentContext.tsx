import React, { createContext, useState, useContext, useEffect } from "react";
import { ChildrenType } from "../utils/types";
import { content } from "../content/content";

// Define the type for your context value
type ContentContextValue = {
  contentList: {
    menu: {};
    navRoutes: {};
    register: {};
  };
};

// Create the initial context value
const initialContextValue: ContentContextValue = {
  contentList: {},
};

const ContentContext = createContext<ContentContextValue>(initialContextValue);

export const useContentContext = () => useContext(ContentContext);

export const ContentContextProvider: React.FC<ChildrenType> = ({
  children,
}) => {
  const [contentList, setcontentList] = useState({
    menu: {},
    navRoutes: {},
    register: {},
  });

  useEffect(() => {
    const menuContent = content.find(
      (contentItem, contentIndex) => contentItem.name === `menu`
    );
    setcontentList((s) => ({ ...s, menu: menuContent }));

    const navRoutesContent = content.find(
      (navItem) => navItem.name === `nav-routes`
    );
    setcontentList((s) => ({ ...s, navRoutes: navRoutesContent }));

    const registerContent = content.find(
      (navItem) => navItem.name === `register`
    );
    setcontentList((s) => ({ ...s, register: registerContent }));
  }, []);

  // Pass the context value to the provider
  const contextValue: ContentContextValue = { contentList };

  return (
    <ContentContext.Provider value={contextValue}>
      {children}
    </ContentContext.Provider>
  );
};
