import React from "react";
import PlusBlock from "./PlusBlock";
import health from "./health.png";
import pet from "./pet.png";
import piggy from "./piggy.png";
import spa from "./spa.png";
const PlusAndPremium = () => (
  <div className="plus-and-premium">
    <div className="div-h1">
      <h1>Customize for your Customers with plus and premium</h1>
    </div>
    <div className="plusblock-wrapper">
      <PlusBlock
        title={"Health & Dental"}
        data={
          "Only the most inspiring content served directly to your patients while they wait for their medical and dental appointments."
        }
        img={health}
      />
      <PlusBlock
        img={pet}
        title={"Vets & Pets"}
        data={
          "Taking care of our fur-babies is top priority and Spotsy delivers articles designed specifically for veterinarians and pet supply stores."
        }
      />
      <PlusBlock
        img={spa}
        title={"Salons & Spas"}
        data={
          "Kick back and relax with uplifting features from Spotsy during your next salon or spa treatment."
        }
      />
      <PlusBlock
        img={piggy}
        title={"Professional Services"}
        data={
          "From banking to therapy offices and everywhere in between, Spotsy offers a custom-curated approach to in-the-moment digital promotions and content that promises to uplift and inspire."
        }
      />
    </div>
  </div>
);

export default PlusAndPremium;
