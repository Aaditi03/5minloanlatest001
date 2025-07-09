import React from "react";
import "../css/ContentPage.css";
import ChatButton from "../components/ChatButton";
import { Link} from "react-router-dom";


const FAQ = () => {
  return (
    <>

      <div className="content_page_wrapper">
        <div className="content_page_banner_wrapper">
          <div className="content_page_banner_wrapper_overlay">
            <h2>FAQ</h2>
            <div style={{ marginTop: "10px" }}>
            <Link 
              to="/" 
              style={{ 
                color: "#26b9db", 
                fontWeight: "600", 
                marginTop: "10px", 
                textDecoration:"none" 
              }}
            >
              Home
            </Link>
            <span style={{ color: "white", fontSize: "16px", margin: "0 10px" }}>→</span>
              <span style={{ color: "white", fontWeight: "600", fontSize: "16px" }}>
                FAQ
              </span>
          </div>
        </div>
        </div>

        <div className="text_content_wrapper">
          <div className="text_content" style={{ width: "95%" }}>
            <h1 className="page_title mt30 mb50">Frequently asked questions</h1>
            <div className="content_row">
              <div className="content_item">
                <h3 className="mb10">What is 5Minuteloan ?</h3>
                <p>
                  5Minuteloan is a short-term loan company that provides quick
                  and convenient financial solutions to individuals in need of
                  immediate funds.
                </p>
              </div>
              <div className="content_item">
                <h3>How much can I borrow from 5Minuteloan?</h3>
                <p>
                  Loan amounts vary depending on factors such as your income,
                  credit history, and local regulations. 5Minuteloan offers
                  flexible loan amounts tailored to individual needs, with
                  limits set to ensure responsible borrowing.
                </p>
              </div>
            </div>
            <div className="content_row">
              <div className="content_item">
                <h3 className="mb10">How does 5Minuteloan work?</h3>
                <p>
                  5Minuteloan offers short-term loans to eligible individuals
                  based on their income and employment status. Customers can
                  apply online or through our mobile app, and if approved, funds
                  are typically disbursed within a short period.
                </p>
              </div>
              <div className="content_item">
                <h3>What are the repayment terms for 5Minuteloan loans?</h3>
                <p>
                  Repayment terms for 5Minuteloan loans vary depending on the
                  loan amount and type. Generally, loans are repaid in
                  installments over a set period, with options for bi-weekly or
                  monthly payments.
                </p>
              </div>
            </div>

            <div className="content_row">
              <div className="content_item">
                <h3 className="mb10">
                  What are the eligibility requirements to apply for a loan with
                  5Minuteloan?
                </h3>
                <p>
                  To qualify for a loan with 5Minuteloan, applicants typically
                  need to provide proof of employment, a steady income, and meet
                  certain credit criteria. Specific requirements may vary
                  depending on the loan product and regulations in your area.
                </p>
              </div>
              <div className="content_item">
                <h3>Are there any fees associated with 5Minuteloan loans?</h3>
                <p>
                  Yes, 5Minuteloan charges fees for its services, including
                  origination fees and interest charges. The specific fees
                  applicable to your loan will be outlined in your loan
                  agreement.
                </p>
              </div>
            </div>
            <div className="content_row">
              <div className="content_item">
                <h3 className="mb10">
                  How quickly can I get funds from 5Minuteloan?
                </h3>
                <p>
                  5Minuteloan strives to provide fast approval and disbursement
                  of funds. Once your loan application is approved, funds are
                  typically deposited into your account within one business day.
                </p>
              </div>
              <div className="content_item">
                <h3>Can I repay my 5Minuteloan loan early?</h3>
                <p>
                  Yes, borrowers can often repay their loans early without
                  incurring penalties. Early repayment options and associated
                  fees, if any, will be detailed in your loan agreement.
                </p>
              </div>
            </div>
            <div className="content_row">
              <div className="content_item">
                <h3 className="mb10">
                  What happens if I can't repay my 5Minuteloan loan on time?
                </h3>
                <p>
                  If you're unable to repay your loan on time, it's essential to
                  contact 5Minuteloan immediately to discuss your options.
                  Depending on the circumstances, 5Minuteloan may offer
                  repayment extensions or alternative arrangements to help you
                  manage your debt.
                </p>
              </div>
              <div className="content_item">
                <h3>Is my personal information safe with 5Minuteloan?</h3>
                <p>
                  Yes, 5Minuteloan takes the privacy and security of customer
                  information seriously. We utilize industry-standard encryption
                  and security protocols to safeguard your personal and
                  financial data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatButton />
    </>
  );
};

export default FAQ;
