import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

const ProtectedRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );

  return isLoggedIn === "true" ? (
    <>
      {/* <div className='sticky-top'> */}
        {/* <Navbar></Navbar> */}
      {/* </div> */}
      <Outlet />
    </>
  )
    : <Login />;
};

export default ProtectedRoutes;
