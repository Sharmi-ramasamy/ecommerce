import React from "react";
import { Navigate } from "react-router";

export const ProtectedLogin = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem("email");
  if (isLoggedIn) {
    return <Navigate to="/"></Navigate>;
  } else {
    return children;
  }
};
