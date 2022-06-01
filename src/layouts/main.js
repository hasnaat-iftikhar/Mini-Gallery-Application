import React from "react";

// Components
import { AppHeader } from "../components";

const MainLayout = ({ children }) => {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};

export default MainLayout;
