import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Login from "./pages/Login";

const ProtectedRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );

  return isLoggedIn === "true" ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
