import React from "react";
const StaticBodyBlock_2 = (props) => (
  <div className="static">
    <div className="static-data">
      <h1>{props.title}</h1>
      <h2>{props.data}</h2>
      {props.subdata
        ? props.subdata.map((data, index) => {
            return <p key={index}>{data}</p>;
          })
        : null}
      <button>VIEW PLANS</button>
    </div>
    <div className="static-div">
      <img src={props.logo} />
    </div>
  </div>
);

export default StaticBodyBlock_2;
