import { useState } from "react";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";

const Footer_Social = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);

  return (
    <div className="footer-social">
      <div style={{ display: "flex" }}>
        <div style={{ margin: "0px 15px" }}>
          <GrInstagram
            style={{
              color: "#fdb622",
              width: "20px",
              height: "20px",
              color: isHovering ? "#e50683" : "#fdb622",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          />
        </div>
        <div style={{ margin: "-1px 15px" }}>
          <FaFacebookF
            style={{
              color: "#fdb622",
              width: "22px",
              height: "22px",
              color: isHovering1 ? "#e50683" : "#fdb622",
            }}
            onMouseEnter={() => setIsHovering1(true)}
            onMouseLeave={() => setIsHovering1(false)}
          />
        </div>
        <div style={{ margin: "-3px 15px" }}>
          <ImLinkedin2
            style={{
              color: "#fdb622",
              width: "25px",
              height: "25px",
              color: isHovering2 ? "#e50683" : "#fdb622",
            }}
            onMouseEnter={() => setIsHovering2(true)}
            onMouseLeave={() => setIsHovering2(false)}
          />
        </div>
      </div>
    </div>
  );
};
export default Footer_Social;
