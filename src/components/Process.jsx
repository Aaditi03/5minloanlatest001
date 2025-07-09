import React, { useEffect, useState } from 'react';
import image1 from "../images/image3.png";
import image2 from "../images/image1.png";
import image3 from "../images/image2.png";

const Process = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        margin: '50px 40px', // Left & Right margin
        borderRadius: '40px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(135deg, #00AEEF, #0072BC)',
          padding: isMobile ? '40px 20px' : '80px 60px',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: isMobile ? '2rem' : '2.8rem', fontWeight: '800', marginBottom: '10px' }}>
            Get loan in just <span style={{ color: '#FFEB3B' }}>5 minutes</span>
          </h2>
          <p style={{ maxWidth: '750px', margin: 'auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Tired of lenders collecting your information only to deny your applications?
            <br />
            At 5 Minute Loan, we're proud to offer a solution that's notably better, designed to exceed your expectations.
          </p>

          {/* Upper two boxes */}
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '30px',
              marginTop: '60px',
            }}
          >
            <Card
              heading="Fast Approval"
              // subtitle="Lightning"
              description="Complete our online application in just 5 minutes, with quick approvals granted."
              imgSrc={image1}
              width={isMobile ? '100%' : '45%'}
            />
            <Card
              heading="Funds Transfer"
              // subtitle="Quick"
              description={
                <>
                    Receive your approved funds instantly
                    , allowing you to tackle expenses without delay.
                </>
              }
              imgSrc={image2}
              width={isMobile ? '100%' : '45%'}
            />
          </div>

          {/* Bottom wide box */}
          <div style={{ marginTop: '30px' }}>
            <Card
              heading="Customer Support"
              // subtitle="Expert"
              description="Our customer support team is available from 10:00 AM to 6:30 PM IST to assist you with any questions or concerns all throughout the process."
              imgSrc={image3}
              width="100%"
              style={{ marginLeft: 0 }}
              isFull
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ heading, subtitle, description, imgSrc, width, style, isFull }) => (
  <div
    style={{
      background: '#fff',
      borderRadius: '20px',
      padding: '30px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#333',
      width: width || '100%',
      boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
      flexWrap: 'wrap',
      ...style,
    }}
  >
    <div style={{ flex: 1, textAlign: 'left', minWidth: '200px' }}>
      <div style={{ fontSize: '1.2rem', fontWeight: '500', color: '#555' }}>{subtitle}</div>
      <div style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '10px' }}>{heading}</div>
      <div style={{ fontSize: '1rem', lineHeight: '1.5' }}>{description}</div>
    </div>
    <div style={{ marginLeft: '30px' }}>
      <img src={imgSrc} alt={heading} style={{ maxHeight: '100px', width: 'auto' }} />
    </div>
  </div>
);

export default Process;
