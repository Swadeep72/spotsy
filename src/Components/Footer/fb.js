import React from "react";

const Fb = ({ title, data, list }) => (
  <div className="fb">
    {title ? (
      <h1
        style={{
          color: "white",
          textAlign: "center",
          padding: "5px",
          fontSize: "16px",
        }}
      >
        {title}
      </h1>
    ) : null}
    {data ? (
      <p style={{ color: "white", textAlign: "center", fontSize: "16px" }}>
        {data}
      </p>
    ) : null}
    {list
      ? list.map((data, index) => {
          return (
            <a href="/" key={index}>
              {data}
            </a>
          );
        })
      : null}
  </div>
);

export default Fb;
