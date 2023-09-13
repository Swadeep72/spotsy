import React from "react";
import Fb from "./fb";

const Footer_Block = () => (
  <div className="footer-block">
    <Fb
      className="hi"
      title={"Questions? We have answers!"}
      data={"917-268-2040"}
    />
    <div className="a1">
      <Fb
        className="hi"
        title={"Ready to make your customer experience even better?"}
      />
      <div className="input-button">
        <input type="text" placeholder="Email Address" />
        <button>LEARN MORE</button>
      </div>
    </div>
    <Fb
      className="hi"
      title={"Address"}
      list={["250 Park Avenue", "7th Floor", "New York", "NY 10177", "USA"]}
    />
  </div>
);

export default Footer_Block;
