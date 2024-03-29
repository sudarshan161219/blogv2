import React from "react";
import { Outlet } from "react-router-dom";
import { Dashboardnav } from "../../Components/export";
import Wrapper from "../../assets/Wrappers/SharedLayout";

const SharedLayout = () => {
  return (
    <Wrapper>
        <div className="dashboard-page">
          <Outlet />
        </div>
      <Dashboardnav />
    </Wrapper>
  );
};

export default SharedLayout;
