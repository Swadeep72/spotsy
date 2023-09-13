import React from "react";

const StaticBodyBlock_2 = (props) => (
  <div className="static">
    <div className="static-data">
      <p1>{props.title}</p1>
      <p2>{props.data}</p2>
      {props.subdata
        ? props.subdata.map((data, index) => {
            return <p3 key={index}>{data}</p3>;
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
