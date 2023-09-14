import React, { useEffect, useState } from "react";
import PlanBlock from "./PlanBlock";
import data from "../../Constant";

const ChoosePlan = () => {
  const [btn1, setBtn1] = useState(true);

  const handleMonthlyClick = () => {
    setBtn1(true);
  };

  const handleYearlyClick = () => {
    setBtn1(false);
  };

  return (
    <div className="chooseplan" id="choose">
      <h1>Choose Your Plan</h1>
      <h5>No downloads. Upgrade plans or cancel anytime.</h5>
      <div>
        <button
          className={`btn-1${btn1 ? " active" : ""}`}
          onClick={handleMonthlyClick}
          autoFocus
        >
          Monthly
        </button>
        <button
          className={`btn-2${!btn1 ? " active" : ""}`}
          onClick={handleYearlyClick}
        >
          Yearly
        </button>
      </div>
      {btn1 ? (
        <div className="plan-wrapper">
          {data.map((data, index) => (
            <PlanBlock
              key={index}
              title={data.title}
              amount={data.amount_monthly}
              tag={data.tag}
            />
          ))}
        </div>
      ) : (
        <div className="plan-wrapper">
          {data.map((data) => (
            <PlanBlock
              key={data.title}
              title={data.title}
              amount={data.amount_yearly}
              tag={data.tag}
            />
          ))}
        </div>
      )}
      <h6>
        Or <span style={{ color: "#fdb622" }}>contact us</span> today for
        enterprise options and pricing.
      </h6>
    </div>
  );
};

export default ChoosePlan;
