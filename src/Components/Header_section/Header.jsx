import React, { useState } from "react";
import logo from "../Header_section/bell1.png";
import "../Header_section/header.css";
import { CgChevronDown } from "react-icons/cg";
import { FaRegBell } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.querySelector(".oqfy").style.display = 'none';
  };

  return (
    <>
      <div className="main_navbar">
        <div className="logo_menu">
          <h1 style={{ cursor: "pointer" }} className="logo">
            <img src={logo} style={{ width: "32px" }} alt="" /> <span className="oqfy">OQFY</span>
          </h1>

          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <IoMdClose /> : <FiMenu />}
          </div>
        </div>
        <ul className={`header_list ${menuOpen ? "open" : ""}`}>
          <li>
            <select name="Services" id="services_btn">
              <option value="">Services</option>
              <option value="">Contract Services</option>
              <option value="">E-Stamp Services</option>
              <option value="">E-Sign Services</option>
              <option value="">Document Verification</option>
              <option value="">Property Registration</option>
              <option value="">Service Settings</option>
              <option value="">Service Help</option>
            </select>
          </li>
          <li>User Management</li>
          <li>My Orders</li>
          <li>Reports</li>
          <li>Stamp Inventory</li>
          <li>Bar Codes</li>
          <li style={{ color: "gray" }}>Invoice</li>
          <button className="comingsoon">Coming Soon</button>
        </ul>

        <div className="bell">
          <div>
            <FaRegBell />
          </div>
          <div className="notifications">2</div>
        </div>
        <div>
          <button className="profile">
            <CgChevronDown />
            <h5 style={{ fontSize: "15px" }}> Michael Smith</h5>
            <div className="M">
              <p>M</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
