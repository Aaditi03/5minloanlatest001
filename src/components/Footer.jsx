import React, { useState } from "react";
import "../css/Common.css";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";



const Footer = () => {
const [dropdown1, setDropdown1] = useState(false);
const [dropdown2, setDropdown2] = useState(false);
const [dropdown3, setDropdown3] = useState(false);
return (
<>
<div className="footer_wrapper full-width">
<div className="footer_row">
<div className="footer_tab">
<h2 className="tab_title">Quick Links</h2>
<li>
<Link to="/">
<FaChevronRight className="footer_icon" />
Home
</Link>
</li>
<li>
<Link to="/about-us">
<FaChevronRight className="footer_icon" />
About Us
</Link>
</li>
<li>
<Link to="/contact">
<FaChevronRight className="footer_icon" />
Contact
</Link>
</li>
<li>
<a href="https://agrimfincap.roopya.money/customer/personal_loan/c4f785faa778307080bb24382f32b9ec862f5f8af733408582f79bf59888aa7a/2f0be3f1474e21f6fa21b6fd407d7bf2891c74e73da741bf82ed2966a6d2aeb2">
<FaChevronRight className="footer_icon" />
Apply Now
</a>
</li>
<li>&nbsp;</li>
</div>
<div className="footer_tab">
<h2 className="tab_title">Legal</h2>
<li>
<Link to="/faq">
<FaChevronRight className="footer_icon" />
FAQ's
</Link>
</li>
<li>
<Link to="/privacypolicy">
<FaChevronRight className="footer_icon" />
Privacy Policy
</Link>
</li>
<li>
<Link to="/termsandconditions">
<FaChevronRight className="footer_icon" />
Terms and Conditions
</Link>
</li>
<li>
<Link to="/cancelation-refund">
<FaChevronRight className="footer_icon" />
Cancellation & Refund
</Link>
</li>
<li>&nbsp;</li>
</div>
<div className="footer_tab">
<h2 className="tab_title">Follow Us</h2>
<li>
<a href="https://www.facebook.com/profile.php?id=61575842751387" target="_blank" rel="noopener noreferrer">
<FaFacebook className="footer_icon" /> Facebook
</a>
</li>
<li>
<a href="https://www.instagram.com/5minuteloan/" target="_blank" rel="noopener noreferrer">
<FaInstagram className="footer_icon" /> Instagram
</a>
</li>
<li>
<a href="https://www.linkedin.com/company/107131675/admin/page-posts/published/" target="_blank" rel="noopener noreferrer">
<FaLinkedin className="footer_icon" /> LinkedIn
</a>
</li>
<li>
<a href="https://www.youtube.com/@5MinuteLoan-Official" target="_blank" rel="noopener noreferrer">
<FaYoutube className="footer_icon" /> YouTube
</a>
</li>
<li>&nbsp;</li>
</div>

<div className="footer_tab">
<li>&nbsp;</li>
<link
rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
crossorigin="anonymous"
referrerpolicy="no-referrer"
/>

<h2 className="tab_title">Contact</h2>
<li>
<a className="call_info" href="mailto:care@5Minuteloan.com">
<i className="fas fa-envelope"></i> &nbsp; care@5Minuteloan.com
</a>
</li>
<li>
<a className="call_info" href="tel:+919289877932">
<i className="fas fa-phone"></i> &nbsp; +91-9090999941, 9099909941
</a>
</li>
<li>
<a className="call_info" href="tel:+919289877932">
<i class="fa-solid fa-tty"></i> &nbsp; 18003092760
</a>
</li>
<li>
<p className="call_infoo" style={{ color: 'white' }}>
<i className="fas fa-map-marker-alt" style={{ color: 'white' }}></i>&nbsp;
Corporate Office: F 40, Phase 1, Sector 6, Noida, Gautam Buddha Nagar, Uttar Pradesh 201301
</p>
</li>
<li>
<p className="call_infoo" style={{ color: 'white' }}>
<i className="fas fa-map-marker-alt" style={{ color: 'white' }}></i>&nbsp;
Registered Office: 276, First Floor, Gagan Vihar, Shahdara, Delhi- 110051
</p>
</li>
</div>
</div>
<div className="copyright_section mt30">
<p>
Copyright RBI Registered NBFC Agrim Fincap Private Limited
</p>
</div>
</div>
</>
);
};

export default Footer;