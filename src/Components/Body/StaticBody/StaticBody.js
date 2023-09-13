import React from "react";
import StaticBodyBlock from "./StaticBodyBlock";
import StaticBodyBlock_2 from "./StaticBodyBlock_2";
import logo from "./img.jpg";

const StaticBody = () => (
  <div className="static-wrapper">
    <StaticBodyBlock_2
      title={"Spotlight what's new, and what's next."}
      data={"Surprises keep your customers coming back!"}
      subdata={[
        "Introduce new services.",
        "Promote new and upcoming products. Create upsell opportunities with unique 'in-location-only' offers.",
        "Keep up with what's up and show you're in the know.",
      ]}
      logo={logo}
    />
    <StaticBodyBlock
      title={"Content that matters in the moment, matters most."}
      data={"The inspo customers need, when and where they need it."}
      subdata={[
        "Direct your customers to your menu, products, and services.",
        "Customize your promotions, by location.",
        "Engage customers with a unique digital experience in your location.",
      ]}
      logo={logo}
    />
    <StaticBodyBlock_2
      title={"No app. No downloads. No paywall."}
      data={"Scan a QR code and enjoy."}
      subdata={[
        "Easy digital access to the best-selling magazines.",
        "Turn waiting into wonder with regularly-updated,uniquely-curated, relevant content.",
        "Be the source for something new: ultimate travel tips,top trends in food, home, fashion, inspiring wellness and celebrations.",
      ]}
      logo={logo}
    />
  </div>
);

export default StaticBody;
