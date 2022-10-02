import React from "react";
import MainDash from "../MainDash/MainDash";
import RightSide from "../RightSide/RightSide";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard_container">
        <div className="dashboard_inner_glass_container">
          <Sidebar />
          <MainDash />
          <RightSide />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
