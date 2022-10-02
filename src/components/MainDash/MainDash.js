import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  return (
    <>
      <div className="main_dash">
        <h1>Dashboard </h1>
        <Cards />
        <h2>Recent Orders </h2>
        <Table />
      </div>
    </>
  );
};

export default MainDash;
