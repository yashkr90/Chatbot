import React from "react";
import { Outlet, useLocation } from "react-router-dom";





const RootLayout = () => {
  const location=useLocation();
  console.log(location);
  return (
    <>
      
        <Outlet />
     
    </>
  );
};

export default RootLayout;