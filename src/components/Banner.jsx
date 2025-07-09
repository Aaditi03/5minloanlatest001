import React from 'react';
import bannerImage from '../images/banner1.png';

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <img src={bannerImage} alt="Banner" className="banner-image" />

      {/* Overlay Content */}
      <div className="banner-content">
        <h1>
          Taking Loan in just <br />
          <span>5 Minutes </span>
        </h1>
        <a 
          href="https://agrimfincap.roopya.money/customer/personal_loan/c4f785faa778307080bb24382f32b9ec862f5f8af733408582f79bf59888aa7a/2f0be3f1474e21f6fa21b6fd407d7bf2891c74e73da741bf82ed2966a6d2aeb2"
          style={{
            padding: '14px 32px',
            fontSize: '1.2rem',
            background: 'linear-gradient(to right, #00c6ff, #0072ff)',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: '600',
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          Apply Now
        </a>
      </div>

      <style jsx>{`
        .banner-wrapper {
          position: relative;
    margin-top: -40px;
          padding: 0;
          overflow: hidden;
        }

        .banner-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .banner-content {
          position: absolute;
          top: 50%;
          left: 8%;
          transform: translateY(-50%);
          color: #fff;
          max-width: 600px;
        }

        .banner-content h1 {
          font-size: 3.5rem;
          line-height: 1.2;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .banner-content h1 span {
          color: #ffffff;
        }

        .banner-content button {
          padding: 14px 32px;
          font-size: 1.2rem;
          background: linear-gradient(to right, #00c6ff, #0072ff);
          color: #fff;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 600;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .banner-content h1 {
            font-size: 2.5rem;
          }

          .banner-content button {
            font-size: 1rem;
            padding: 12px 28px;
          }
        }

        @media (max-width: 768px) {
          .banner-content {
            left: 5%;
            max-width: 90%;
          }

          .banner-content h1 {
            font-size: 2rem;
          }

          .banner-content button {
            font-size: 1rem;
            padding: 10px 24px;
          }
        }

        @media (max-width: 480px) {
          .banner-content h1 {
            font-size: 1.5rem;
            line-height: 1.3;
          }

          .banner-content button {
            font-size: 0.9rem;
            padding: 10px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
