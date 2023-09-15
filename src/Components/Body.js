import React from "react";
import ChoosePlan from "./Body/Choose your plan/ChoosePlan";
import Faq from "./Body/Faq/Faq";
import PlusAndPremium from "./Body/Plus and Premium/PlusAndPremium";
import StaticBody from "./Body/StaticBody/StaticBody";
import StaticHeader from "./Body/StaticHeader/StaticHeader";

const Body = () => {
  return (
    <>
      <StaticHeader />
      {/* <StaticBody /> */}
      <ChoosePlan />
      <PlusAndPremium />
      <Faq />
    </>
  );
};

export default Body;
