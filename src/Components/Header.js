import { useState, useEffect } from "react";
import logo from "./assets/logo.svg";

const Header = () => {
  const [headerBackground, setHeaderBackground] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newBackground =
        scrollY === 0 ? "transparent" : "rgba(0, 0, 0, 0.7)";
      setHeaderBackground(newBackground);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header" style={{ backgroundColor: headerBackground }}>
      <a href="/">
        <div>
          <img src={logo} alt="Logo" />
        </div>
      </a>
      {!window.scrollY ? (
        <a href="/">📞 205-408-4935</a>
      ) : (
        <div className="header-button">
          <button>VIEW PLANS</button>
        </div>
      )}
    </div>
  );
};

export default Header;
