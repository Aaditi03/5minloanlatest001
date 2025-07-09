import React from "react";
import { Link } from "react-router-dom";
import { Typography, Grid, Paper, Box, Container, Button } from '@mui/material';
import ApplicationIcon from '@mui/icons-material/Assignment';
import VerificationIcon from '@mui/icons-material/CheckCircle';
import ApprovalIcon from '@mui/icons-material/Check';
import ChatButton from "../components/ChatButton";
import '../pages/AboutUs.css'; // Make sure to include the CSS below
import AboutusImage from '../images/aboutbanner.png'
import trustedIcon from '../images/icon10.png'
import securityIcon from '../images/icon11.png'
import customerIcon from '../images/icon12.png'
import inclusiveIcon from '../images/icon13.png'
import onlineIcon from '../images/icon14.png'
import verifyIcon from '../images/icon15.png'
import approvalIcon from '../images/icon16.png'
import girlProcessImage from '../images/girl.png'
import contactSupportImage from '../images/support.png'

const About = () => {
  return (
    
    <div className="about-us-wrapper">
      
      <section className="welcome-section">
  <div className="welcome-container">
    <div className="welcome-text">
      <h2>
        Welcome to <span className="highlight">5 Minute Loan</span>
      </h2>
      <p>
        5 Minute Loan is your trusted provider of personal loans for salaried professionals in India, offering quick and flexible financial solutions for unexpected expenses, medical emergencies, and home improvements all at your fingertips! As part of an RBI registered NBFC, we are committed to empowering millennials with innovative loan options, ensuring fast approvals with customer friendly terms. Our experienced leadership and skilled team have positioned us as one of the fastest growing and most trusted fintech companies, dedicated to providing seamless and reliable financial support.
      </p>
    </div>
    <div className="welcome-image">
      <img src={AboutusImage} alt="Couple with documents" />
    </div>
  </div>
</section>

<section className="why-choose-section">
  <div className="why-choose-container">
    <h2>
      Why Choose <span className="highlight-green">for their Services?</span>
      <span className="arrow">↘</span>
    </h2>
    <div className="features-grid">
      <div className="feature-card">
        <img src={trustedIcon} alt="Trusted by Thousands" />
        <h3>Trusted by Thousands</h3>
        <p>
          Is a trusted digital lending partner for thousands of salaried individuals in India, known for the fast, fair, and reliable service.
        </p>
      </div>
      <div className="feature-card">
        <img src={securityIcon} alt="Security and Privacy" />
        <h3>Security and Privacy</h3>
        <p>
          At, your data security is our priority. We use advanced encryption and security measures to protect your information, fully complying with India's data privacy laws.
        </p>
      </div>
      <div className="feature-card">
        <img src={customerIcon} alt="Customer Centric Approach" />
        <h3>Customer Centric Approach</h3>
        <p>
          At, we prioritize our customers with dedicated support for applications, repayments, and financial advice, ensuring exceptional service at every step.
        </p>
      </div>
      <div className="feature-card">
        <img src={inclusiveIcon} alt="Flexible and Inclusive" />
        <h3>Flexible and Inclusive</h3>
        <p>
          We believe in financial access for all. Our inclusive criteria offer loan options for young professionals and experienced workers alike, accommodating various credit scores, including those with less than perfect histories.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="loan-process-section">
  <div className="loan-process-container">
    <div className="girl-image-left">
      <img src={girlProcessImage} alt="Happy girl with denim shirt" />
    </div>
    <div className="process-content-right">
      <h2>Our Loan Process <span className="arrow">------→</span></h2>
      <p>
        At , we have simplified the loan process to make it as easy and straight forwards possible. Here's how it works:
      </p>
      <div className="steps">
        <div className="step-box">
          <h4><img src={onlineIcon} alt="Online Application" /> Online Application</h4>
          <p>
            Start by filling out our quick and easy loan application form online. You'll need to provide some basic personal information, employment details, and the loan amount you wish to apply for.
          </p>
        </div>
        <div className="step-box">
          <h4><img src={verifyIcon} alt="Instant Verification" /> Instant Verification</h4>
          <p>
            Our advanced technology allows us to verify your documents and creditworthiness immediately. Within minutes, you will receive a preliminary decision on your loan application.
          </p>
        </div>
        <div className="step-box">
          <h4><img src={approvalIcon} alt="Approval and Disbursal" /> Approval and Disbursal</h4>
          <p>
            Once your loan is approved, the funds will be transferred directly to your bank account. In most cases, this happens within 24–48 hours of approval, but with us, you can get it in mere 5 minutes.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* 

      <section className="why-choose-section">
        <h3>Why Choose <span className="highlight">for their Services?</span></h3>
        <div className="features-grid">
          <div className="feature-box">
            <h4>Trusted by Thousands</h4>
            <p>
              5Minuteloan is a trusted digital lending partner for thousands of salaried individuals in India,
              known for the fast, fair, and reliable service.
            </p>
          </div>
          <div className="feature-box">
            <h4>Security and Privacy</h4>
            <p>
              At 5Minuteloan, your data security is our priority. We use advanced encryption and security
              measures to protect your information, fully complying with India's data privacy laws.
            </p>
          </div>
          <div className="feature-box">
            <h4>Customer-Centric Approach</h4>
            <p>
              We prioritize our customers with dedicated support for applications, repayments, and
              financial advice, ensuring exceptional service at every step.
            </p>
          </div>
          <div className="feature-box">
            <h4>Flexible and Inclusive</h4>
            <p>
              We believe in financial access for all. Our inclusive criteria offer loan options for young
              professionals and experienced workers alike, accommodating various credit scores, including
              those with less-than-perfect histories.
            </p>
          </div>
        </div>
      </section>

      <section className="loan-process">
        <h3 className="loan-process-heading">Our Loan Process</h3>
        <p className="loan-process-subtext">
          At 5Minuteloan, we have simplified the loan process to make it as easy and straightforward as possible. Here's how it works:
        </p>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Paper elevation={4} className="process-card">
                <Box className="icon-box">
                  <ApplicationIcon className="process-icon" />
                </Box>
                <Typography variant="h5" align="center">Online Application</Typography>
                <Typography variant="body2" align="center">
                  Fill out our quick and easy online loan application form.
                  Provide basic information, employment details, and the desired loan amount.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper elevation={4} className="process-card">
                <Box className="icon-box">
                  <VerificationIcon className="process-icon" />
                </Box>
                <Typography variant="h5" align="center">Instant Verification</Typography>
                <Typography variant="body2" align="center">
                  We instantly verify your documents using advanced technology and
                  give you a preliminary decision in minutes.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper elevation={4} className="process-card">
                <Box className="icon-box">
                  <ApprovalIcon className="process-icon" />
                </Box>
                <Typography variant="h5" align="center">Approval and Disbursal</Typography>
                <Typography variant="body2" align="center">
                  Once approved, the loan is transferred to your bank account within 5 minutes to 48 hours.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </section> */}

      {/* <section className="enquire-section">
  <div className="enquire-container">
    <div className="enquire-left">
      <h3>Enquire for Loan</h3>
      <p>
        We're here to help you out! Contact us for any queries or concerns about our services. Your feedback is important to us
      </p>
      <Link to="/contact" className="contact-btn">Contact Us</Link>
    </div>
    <div className="enquire-right">
      <img src={contactSupportImage} alt="Customer Support Girl" />
    </div>
  </div>
</section> */}


      <ChatButton />
    </div>
  );
};

export default About;