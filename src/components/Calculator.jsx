import React, { useState } from 'react';

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [tenure, setTenure] = useState(30);
  const [interestRate, setInterestRate] = useState(0.75); // daily %

  const calculatePayment = () => {
    const interest = (loanAmount * interestRate * tenure) / 100;
    return Math.round(loanAmount + interest);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Left Panel */}
        <div style={styles.left}>
          <h2 style={styles.heading}>Loan Calculator</h2>

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Loan amount:
              <span style={styles.value}>₹{loanAmount.toLocaleString()}</span>
            </label>
            <input
              type="range"
              min="5000"
              max="100000"
              step="1000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(parseInt(e.target.value))}
              style={styles.range}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Tenure (days):
              <span style={styles.value}>{tenure}</span>
            </label>
            <input
              type="range"
              min="1"
              max="90"
              value={tenure}
              onChange={(e) => setTenure(parseInt(e.target.value))}
              style={styles.range}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>
              Daily Interest Rate:
              <span style={styles.value}>{interestRate}%</span>
            </label>
            <input
              type="range"
              min="0.5"
              max="1"
              step="0.05"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value))}
              style={styles.range}
            />
          </div>
        </div>

        {/* Right Panel */}
        <div style={styles.right}>
          <h3 style={styles.subheading}>Clarity in Lending</h3>
          <p style={styles.para}>Understand your full financial obligation before applying.</p>

          <div style={styles.detailRow}>
            <span>Tenure:</span>
            <span>{tenure} days</span>
          </div>
          <div style={styles.detailRow}>
            <span>Daily Interest Rate:</span>
            <span>{interestRate}%</span>
          </div>

          <div style={styles.payment}>
            <strong>Total Repayment</strong>
            <div style={styles.amount}>₹{calculatePayment()}</div>
          </div>

          <a 
            href="https://agrimfincap.roopya.money/customer/personal_loan/6e50f4fad0d8dda32d4165cd34676deb66e7373f0c579ff0ec88a266ccb0d365/3f9dd989923ae9ebde684cc097a344b197991f737bb61e802b59dd099e5eb407"
            style={styles.button}
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

// Base Styles
const baseStyles = {
  colorPrimary: '#007aff',
  bgRight: 'linear-gradient(135deg, #007aff, #409fff)',
};

const styles = {
  wrapper: {
    padding: '40px 20px',
    background: '#f9f9f9',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    background: '#fff',
    borderRadius: '20px',
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden',
    maxWidth: '1350px', // Increased width
    width: '100%',
  },
  
  left: {
    flex: 1,
    minWidth: '280px',
    padding: '30px',
    background: '#fff',
    boxSizing: 'border-box',
  },
  right: {
    flex: 1,
    minWidth: '280px',
    padding: '30px',
    background: baseStyles.bgRight,
    color: 'white',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '28px',
    fontWeight: '600',
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '22px',
    marginBottom: '10px',
  },
  para: {
    marginBottom: '20px',
    fontSize: '16px',
  },
  inputGroup: {
    marginBottom: '25px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: '500',
    color: '#222',
  },
  value: {
    float: 'right',
    color: baseStyles.colorPrimary,
    fontWeight: '600',
  },
  range: {
    width: '100%',
    marginTop: '8px',
    accentColor: baseStyles.colorPrimary,
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
    fontSize: '16px',
  },
  payment: {
    background: '#fff',
    color: baseStyles.colorPrimary,
    padding: '15px 20px',
    borderRadius: '10px',
    margin: '20px 0',
    textAlign: 'center',
  },
  amount: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  button: {
    background: '#fff',
    color: baseStyles.colorPrimary,
    padding: '12px 20px',
    border: 'none',
    borderRadius: '50px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'all 0.3s ease',
  },
};

export default Calculator;
