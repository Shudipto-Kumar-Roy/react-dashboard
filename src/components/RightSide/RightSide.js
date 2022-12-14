import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <>
      <div className="right_side">
        <div className="customer_updates">
          <h3>Updates</h3>
          <Updates />
        </div>
        <div className="customer_review">
          <h3>Customer Review</h3>
          <CustomerReview />
        </div>
      </div>
    </>
  );
};

export default RightSide;
