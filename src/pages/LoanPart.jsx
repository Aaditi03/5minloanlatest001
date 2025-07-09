import React from 'react';
import Image1 from '../images/image20.png';
import Image2 from '../images/image21.png';
import Image3 from '../images/image22.png';
import ArrowIcon from '../images/arrow.png';

const LoanEligibilitySection = () => {
  return (
    <div className="loan-eligibility-section">
      <div className="container">
        <h2>
          Who qualifies for <span className="highlight-text">our loans?</span>
        </h2>
        <p className="description">
          Don't lose hope if you could not get your loans approved till now! Reach out to us,
          apply now and get it transferred instantly. We specialize in offering quick, hassle-free
          loans when traditional lenders turn you away.
        </p>

        <div className="arrow-icon">
          <img src={ArrowIcon} alt="arrow" />
        </div>

        <div className="card-grid">
          <div className="card">
            <img src={Image1} alt="Person 1" />
          </div>
          <div className="card">
            <img src={Image2} alt="Low credit score" />
          </div>
          <div className="card">
            <img src={Image3} alt="Low credit again" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .loan-eligibility-section {
          background: #f4fbfd;
          padding: 60px 20px;
          margin: 40px; /* Added margin on all sides */
        }

        .container {
          max-width: 1400px; /* Increased width */
          margin: auto;
          text-align: center;
        }

        h2 {
          font-size: 36px;
          font-weight: 700;
        }

        .highlight-text {
          background: linear-gradient(90deg, #00bfa6, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .description {
          margin-top: 20px;
          color: #444;
          font-size: 16px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .arrow-icon {
          margin-top: 20px;
        }

        .arrow-icon img {
          width: 50px;
          height: auto;
        }

        .card-grid {
          margin-top: 40px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          width: 380px;
          height: 220px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 28px;
          }

          .card {
            width: 90%;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default LoanEligibilitySection;
