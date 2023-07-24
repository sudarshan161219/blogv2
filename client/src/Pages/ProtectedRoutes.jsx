import React from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/Context";

const ProtectedRoute = ({ children }) => {
  const { user, token } = useAppContext();
  // if (!user) {
  //   return <Navigate to="/" />;
  // }
  return children;
};

export default ProtectedRoute;
