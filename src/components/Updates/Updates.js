import React from "react";
import { updateData } from "../Data/Data";
import "./Updates.css";
const Updates = () => {
  return (
    <>
      <div className="updates">
        {updateData &&
          updateData.map((update, index) => (
            <div className="update" key={index}>
              <div className="icon_time">
                <img src={update.image} alt="update" />
                <span>{update.time}</span>
              </div>
              <div className="description">
                <span>{update.name} {" "}</span>
                <span>{update.notification}</span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Updates;
