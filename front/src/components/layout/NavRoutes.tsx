import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useContentContext } from "../../contexts/ContentContext";

const NavRoutes: React.FC = () => {
  const { contentList } = useContentContext();
  const { navRoutes } = contentList;

  return (
    <Suspense fallback={<div className="bg-light text-black">Loading...</div>}>
      <Routes>
        {navRoutes?.items?.map((route: any, i: number) => (
          <Route
            key={i}
            exact
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default NavRoutes;
