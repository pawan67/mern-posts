import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function RequriedAuth() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("user");

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} state={{ from: location }} replace />
  );
}

export default RequriedAuth;
