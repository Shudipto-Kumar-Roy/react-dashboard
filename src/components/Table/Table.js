import React from "react";
import "./Table.css";
const Table = () => {
  const rows = [
    ["Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"],
    ["Big Baza Bang ", 18908424, "2 March 2022", "Pending"],
    ["Mouth Freshner", 18908424, "2 March 2022", "Approved"],
    ["Cupcake", 18908421, "2 March 2022", "Delivered"],
  ];

  return (
    <>
      <div className="table_container">
        <table>
          <thead>
            <tr className="table_head_row">
              <th>Product</th>
              <th>Tracking ID</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows &&
              rows.map((row,index) => {
                return (
                  <tr key={index} className="table_body_row">
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
