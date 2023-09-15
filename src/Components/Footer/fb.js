import React from "react";

const Fb = ({ title, data, list }) => (
  <div className="fb">
    {title ? (
      <h1
        className="h1"
        style={{
          marginTop: "20px",
          color: "white",
          lineHeight: "24px",
          fontSize: "17px",
          textAlign: "center",
          fontWeight: "700",
        }}
      >
        {title}
      </h1>
    ) : null}
    {data ? (
      <p
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "16px",
          lineHeight: "24px",
        }}
      >
        {data}
      </p>
    ) : null}
    {list
      ? list.map((data, index) => {
          return (
            <a
              style={{
                color: "white",
                textAlign: "center",
                fontSize: "16px",
                lineHeight: "24px",
              }}
              href="/"
              key={index}
            >
              {data}
            </a>
          );
        })
      : null}
  </div>
);

export default Fb;
