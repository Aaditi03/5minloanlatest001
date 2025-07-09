import React, { useState, useEffect } from "react";
import "../css/Common.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { getStorage } from "../Utils/common";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [eligibility, setEligibility] = useState(null); // To store eligibility status
  const navigate = useNavigate(); 

  useEffect(() => {
    const token = getStorage("token");
    const eligibilityStatus = getStorage("eligibility");

    if (token) {
      setIsLoggedIn(true);
    }

    if (eligibilityStatus) {
      setEligibility(eligibilityStatus);
    }
  }, []);

  function showNavbar(e) {
    let navbar = document.querySelector(".header_wrapper");
    let navList = document.querySelector(".nav_list");
    navList.classList.toggle("v-class");
    navbar.classList.toggle("h-nav");
    if (navbar.classList.contains("h-nav")) {
      navbar.style.zIndex = "1";
    } else {
      navbar.style.zIndex = "2";
    }
  }

  // Handle the "Dashboard" click event to navigate based on eligibility
  const handleDashboardClick = () => {
    if (eligibility === 1) {
      navigate("/my-dashboard/eligibility"); // Navigate to eligibility page if eligible
    } else {
      navigate("/my-dashboard"); // Navigate to the regular dashboard if not eligible
    }
  };

  return (
    <>
      <div className="header_wrapper h-nav">
        <nav>
          <div className="logo_wrapper">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="nav_list v-class">
          <li>
  <NavLink to="/home" onClick={showNavbar}>Home</NavLink>
</li>
<li>
  <NavLink to="/about-us" onClick={showNavbar}>About</NavLink>
</li>
<li>
  <NavLink to="/contact" onClick={showNavbar}>Contact</NavLink>
</li>
<li>
  {isLoggedIn ? (
    <button
      className="apply_now_button_link"
      onClick={() => { showNavbar(); handleDashboardClick(); }}
    >
      Dashboard
    </button>
  ) : (
    <a href="https://agrimfincap.roopya.money/customer/personal_loan/c4f785faa778307080bb24382f32b9ec862f5f8af733408582f79bf59888aa7a/2f0be3f1474e21f6fa21b6fd407d7bf2891c74e73da741bf82ed2966a6d2aeb2" className="apply_now_button_link" onClick={showNavbar}>
      Apply Now
    </a>
  )}
</li>
<li>
  <NavLink to="/repayloan" className="apply_now_button_link repay_loan_button" onClick={showNavbar}>
    Repay Loan
  </NavLink>
</li>

          </ul>
          <div className="burger" onClick={showNavbar}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
