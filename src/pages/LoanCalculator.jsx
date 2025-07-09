import React from 'react';
import Icon5 from '../images/icon5.png';
import Icon6 from '../images/icon6.png';
import Icon7 from '../images/icon7.png';
import Icon8 from '../images/icon8.png';
import Icon9 from '../images/icon9.png';
import Imageonly from '../images/imageonly.png';

const featureData = [
  {
    icon: Icon5,
    title: 'Loan Amount',
    description: 'Loan from ₹5000 - ₹100000',
  },
  {
    icon: Icon6,
    title: 'Loan Tenure',
    description: 'Tenure from 7 to 40 days',
  },
  {
    icon: Icon7,
    title: '100% Paperless',
    description: '100% Paperless Verification',
  },
  {
    icon: Icon8,
    title: 'Instant Loan',
    description: 'Swift Payout',
  },
  {
    icon: Icon9,
    title: 'Unsecured Loan',
    description: 'Start now',
  },
];

const LoanFeatures = () => {
  return (
    <div className="features-section">
      <div className="features-grid">
        {featureData.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-inner">
              <div className="icon-wrapper">
                <img src={item.icon} alt={item.title} className="feature-icon" />
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <img src={Imageonly} alt="Loan Info" className="below-section-image" />

      <style jsx>{`
        .features-section {
          background: #f8fdff;
          padding: 50px 0;
          text-align: center;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 30px;
          max-width: 1500px;
          margin: 50px 50px;
          width: auto;
        }

        .feature-card {
          background: linear-gradient(135deg, #01cbb3, #3a7bd5);
          padding: 6px;
          border-radius: 25px;
          transition: transform 0.3s ease;
          height: 220px;
        }

        .feature-card:hover {
          transform: translateY(-5px);
        }

        .feature-inner {
          background: white;
          border-radius: 20px;
          padding: 30px 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .icon-wrapper {
          background: linear-gradient(135deg, #01cbb3, #3a7bd5);
          border-radius: 50%;
          width: 75px;
          height: 75px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .feature-icon {
          width: 40px;
          height: 40px;
        }

        h4 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        p {
          font-size: 14px;
          color: #333;
          margin: 0;
        }

        .below-section-image {
          margin-top: 40px;
          max-width: 100%;
          height: auto;
        }

        /* Responsive styles */
        @media (max-width: 992px) {
          .features-grid {
            display: flex;
            overflow-x: auto;
            flex-wrap: nowrap;
            gap: 16px;
            padding-bottom: 15px;
            margin: 0 30px;
            scrollbar-width: thin;
            scrollbar-color: #bbb transparent;
          }

          .feature-card {
            width: 180px;
            flex: 0 0 auto;
          }

          .feature-inner {
            padding: 20px 15px;
          }

          .icon-wrapper {
            width: 60px;
            height: 60px;
          }

          .feature-icon {
            width: 32px;
            height: 32px;
          }

          h4 {
            font-size: 15px;
          }

          p {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
};

export default LoanFeatures;
