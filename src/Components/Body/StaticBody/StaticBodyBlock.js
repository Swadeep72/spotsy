import React from "react";

const StaticBodyBlock = (props) => (
  <div className="static-2">
    <div className="static-div">
      <img src={props.logo} />
    </div>
    <div className="static-data-2">
      <h1>{props.title}</h1>
      <h2>{props.data}</h2>
      {props.subdata
        ? props.subdata.map((data, index) => {
            return <p key={index}>{data}</p>;
          })
        : null}
      <button>VIEW PLANS</button>
    </div>
  </div>
);

export default StaticBodyBlock;
