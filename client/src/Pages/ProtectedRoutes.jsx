import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppContext } from "../context/Context";
import { Dashboardnav } from "../Components/export";

const ProtectedRoute = ({ children }) => {
  const {  user, silentRefresh, expiresIN } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    if (expiresIN) {
      setTimeout(() => {
        silentRefresh();
      }, expiresIN * 1000);
    } else {
      silentRefresh();
    }
  }, []);

  return user ? (
    <>
      <div className="dashboard-page">
        <Outlet />
      </div>
      <Dashboardnav />
    </>
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );

  // return children;
};

export default ProtectedRoute;
