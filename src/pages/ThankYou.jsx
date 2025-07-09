import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/ThankYou.css';
import { FaCheckCircle, FaHome, FaPhone } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ThankYou = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="thank-you-container">
      <div className="thank-you-content" data-aos="fade-up">
        <div className="success-icon">
          <FaCheckCircle />
        </div>
        <h1 className="thank-you-title">Thank You!</h1>
        <div className="message-box">
          <h2>Your Application is Submitted Successfully.</h2>
          <p>We have received your application and our team will review it shortly.</p>
          <p>You will receive a confirmation email with further details.</p>
        </div>
        <div className="contact-info">
          <p>For any queries, please contact us:</p>
          <div className="contact-details">
            <FaPhone className="phone-icon" />
            <span>91-9099909941</span>
          </div>
        </div>
        <div className="action-buttons">
          <Link to="/" className="home-button">
            <FaHome className="button-icon" />
            Return to Home
          </Link>
          <Link to="/contact" className="contact-button">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou; 