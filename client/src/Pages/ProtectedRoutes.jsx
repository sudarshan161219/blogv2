import React from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/Context";

const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext();
  setTimeout(() => {
      if (!user) {
    return <Navigate to="/" />;
  }
  }, 3500);

  return children;
};

export default ProtectedRoute;
