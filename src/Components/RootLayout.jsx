import React from "react";
import { Outlet, useLocation } from "react-router-dom";

// import { useLocation } from "react-router-dom";

const logError = (error, info) => {
  // Do something with the error, e.g. log to an external API
  console.log(error);
};

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