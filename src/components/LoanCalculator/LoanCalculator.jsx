import React, { useContext, useEffect, useState } from "react";
import { LoanCalculatorWrapper } from "./style";
import img from "../../images/loan_calculation.png";
import RangeSlider from "../RangeSlider/RangeSlider";
import principalIcon from '../../images/Principal.svg';
import emiIcon from '../../images/EMI.svg';
import paybleIcon from '../../images/Total payble.svg';
import { getStorage, setStorage } from "../../Utils/common";
import Button from "../ui/Button";
import ContextDashboard from "../../Context/ContextDashboard";
import { calculateLoan, generateLoan } from "../../Utils/api";
import { useNavigate } from "react-router-dom";
import Select from '../../components/ui/Select';
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const initialData = {
  loanPurpose: ""
};

const options = [
  { label: "Travel", value: "1" },
  { label: "Medical", value: "2" }, 
  { label: "Shopping", value: "3" },
  { label: "Others", value: "4" },
];

function LoanCalculator() {
  const [principal, setPrincipal] = useState(5000);
  const [tenure, setTenure] = useState(7);
  const [emi, setEmi] = useState(0);
  const [loadingAccept, setLoadingAccept] = useState(false);  // Loading state for Accept button
  const [loadingReject, setLoadingReject] = useState(false);  // Loading state for Reject button
  const [formData, setFormData] = useState(initialData);
  const [formDataError, setFormDataError] = useState(initialData);
  const [progressBar, setProgressBar] = useState(getStorage('percent'));
  const [loanData, setLoanData] = useState([]);
    
  const { setMessage, logout, handleEvent } = useContext(ContextDashboard);

  useEffect(() => {
    const params = {
      profile_id: getStorage("cust_profile_id") || "", 
      event_name: "generate_loan_quote"
    };
    generateLoan(params).then(resp => {
      if (resp?.data?.Status === 1) {
        setStorage('percent', resp?.data?.Data?.step_percentage);
        setProgressBar(resp?.data?.Data?.step_percentage);
        setLoanData(resp?.data?.Data);
      }
    });
  }, []);

  const submit = (acceptedId) => {
    const param = {
      profile_id: getStorage("cust_profile_id") || "", 
      event_name: "loan_quotation_decision",
      tenure: tenure,
      purpose_id: formData.loanPurpose,
      amount: principal,
      accepted_id: acceptedId // Pass the accepted_id here
    };

    // Set loading state depending on whether the user clicked "Accept" or "Reject"
    if (acceptedId === "1") {
      setLoadingAccept(true); // Start loading for "Accept"
      setLoadingReject(false); // Ensure "Reject" is not loading
    } else if (acceptedId === "2") {
      setLoadingReject(true); // Start loading for "Reject"
      setLoadingAccept(false); // Ensure "Accept" is not loading
    }

    calculateLoan(param).then(resp => {
      // Reset the loading state after the request completes
      if (acceptedId === "1") setLoadingAccept(false); // Stop loading for "Accept"
      if (acceptedId === "2") setLoadingReject(false); // Stop loading for "Reject"

      if (resp?.data?.Status === 1) {
        setStorage("next_step", resp?.data?.Data?.next_step);
        setStorage('percent', resp?.data?.Data?.step_percentage);
        setProgressBar(resp?.data?.Data?.step_percentage);
        setMessage({ type: 'success', msg: resp?.data?.Message, place: "global" });
        handleEvent(getStorage('next_step'));
      } else if (resp?.data?.Status === 4) {
        logout();
      } else {
        setMessage({ type: 'error', msg: resp?.data?.Message });
      }
    });
  };

  const onChange = (e) => {
    let { name, value } = e.target;  
    setFormData({ ...formData, [name]: value });
    setFormDataError({ ...formDataError, [name]: "" });
  };

  useEffect(() => {
    let si = (principal * tenure * 0.0075);  // 0.75% rate
    setEmi(si);
  }, [principal, tenure]);
  

  return (
    <>
    
      <LoanCalculatorWrapper className="flex">
        <div className="left">
          <div>
            <p>
              WE HAVE CALCULATED YOUR LOAN ELIGIBILITY BASED ON THE GIVEN DETAILS
              PLEASE CHOOSE THE LOAN AMOUNT AND TENURE AS PER YOUR REQUIREMENTS.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="box">
            <div className="flex space-between">
              <h2>Purpose of Loan <span style={{color: "red"}}>*</span></h2>
            </div>
            <div className="center">
              <Select
                className="selectLoanPurpose"
                name="loanPurpose"
                placeholder="--select--"
                error={formDataError?.loanPurpose}
                onChange={onChange}
                value={formData.loanPurpose} 
                options={options}
              />
            </div>
          </div>
          {/* <div className="box">
            <div className="flex space-between">
              <h2>Principal <span style={{color: "red"}}>*</span></h2>
              <span className="value">₹ {principal}</span>
            </div>
            <div className="center">
              <RangeSlider
                min={loanData?.min_loan_amount}
                step="500"
                max={loanData?.max_loan_amount}
                value={principal}
                setValue={setPrincipal}
              />
            </div>
          </div> */}

<div className="box">
  <div className="flex space-between">
    <h2>Enter Loan Amount <span style={{ color: "red" }}>*</span></h2>
  </div>
  
  {/* Input Field for Loan Amount */}
  <div className="center">
    <input
      type="number"
      className="form-control principal-input"
      value={principal}
      onChange={(e) => {
        let value = e.target.value.replace(/\D/g, ""); // Allow only numbers
        setPrincipal(value ? Math.min(Math.max(parseInt(value, 10), 5000), 100000) : "");
      }}
      onBlur={(e) => {
        let value = parseInt(e.target.value, 10);
        if (isNaN(value) || value < 5000) {
          setPrincipal(5000);
        } else if (value > 100000) {
          setPrincipal(100000);
        }
      }}
      placeholder="Enter Loan Amount (₹5000 - ₹100000)"
      min="5000"
      max="100000"
      step="500"
      style={{
        width: "100%",
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "16px",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      }}
    />
  </div>

  {/* Range Slider */}
  <div className="range-container" style={{ marginTop: "10px" }}>
    <input
      type="range"
      className="principal-slider"
      min="5000"
      max="100000"
      step="500"
      value={principal}
      onChange={(e) => setPrincipal(e.target.value)}
      style={{
        width: "100%",
        cursor: "pointer",
        accentColor: "#007BFF",
      }}
    />
  </div>

  {/* Display Selected Amount */}
  <div style={{
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "18px",
    marginTop: "5px",
    color: "#007BFF"
  }}>
    Selected Amount: ₹ {principal}
  </div>
</div>



          <div className="box">
            <div className="flex space-between">
              <h2>Tenure <span style={{color: "red"}}>*</span></h2>
              <span className="value"> Tenure fixed for {tenure} Days</span>
            </div>
            <div className="center">
              <RangeSlider 
                min={loanData?.min_loan_tenure}
                step="1"
                max={loanData?.max_loan_tenure}
                value={tenure}
                setValue={setTenure}
              />
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <div className="img">
                <img src={principalIcon} alt="icon" />
              </div>
              <div className="desc">
                <h3>PRINCIPAL</h3>
                <h2>₹ {principal}</h2>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src={paybleIcon} alt="icon" />
              </div>
              <div className="desc">
                <h3>TOTAL PAYABLE</h3>
                <h2>₹ {Number(principal) + Number(emi)}</h2>
              </div>
            </div>
          </div>
          <Button title={"Accept"} onClick={() => submit("1")} loading={loadingAccept} />
          {/* <Button title={"Reject"} onClick={() => submit("2")} loading={loadingReject} /> */}
        </div>
      </LoanCalculatorWrapper>
    </>
  );
}

export default LoanCalculator;
