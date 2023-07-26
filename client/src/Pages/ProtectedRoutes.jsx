import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppContext } from "../context/Context";
import { Dashboardnav } from "../Components/export";
import Wrapper from "../assets/Wrappers/SharedLayout";


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
    <Wrapper>
      <div className="dashboard-page">
        <Outlet />
      </div>
      <Dashboardnav />
    </Wrapper>
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );

};

export default ProtectedRoute;
