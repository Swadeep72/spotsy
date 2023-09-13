import React from "react";

const PlanBlock = ({ title, amount, tag }) => (
  <div className="plus-block">
    {title === "access" ? <h1 className="access">{title}</h1> : null}
    {title === "plus" ? <h1 className="plus">{title}</h1> : null}
    {title === "premium" ? <h1 className="premium">{title}</h1> : null}
    <h3>{amount}</h3>
    {tag
      ? tag.map((data, index) => {
          return <p key={index}>{data}</p>;
        })
      : null}
    {title === "access" ? (
      <button className="access-btn">GET STARTED</button>
    ) : null}
    {title === "plus" ? (
      <button className="plus-btn">GET STARTED</button>
    ) : null}
    {title === "premium" ? (
      <button className="premium-btn">GET STARTED</button>
    ) : null}
  </div>
);

export default PlanBlock;
