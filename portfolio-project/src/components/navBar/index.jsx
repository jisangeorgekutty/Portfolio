import React from "react";
import "./styles.scss";

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a
          href='/Resume-Jisan George.pdf'
          download
          className="navbar__resume-link"
        >
          RESUME
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
