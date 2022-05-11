import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Login from "./pages/Login";

const setIsLoggedIn = (check) => {
  //   return false;
  if (check === "false") {
    return false;
  } else return true;
};

const ProtectedRoutes = () => {
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn"));
    console.log(localStorage.getItem("isLoggedIn"));
  }, []);

  const isLoggedIn = setIsLoggedIn();
  return isLoggedIn === true ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
