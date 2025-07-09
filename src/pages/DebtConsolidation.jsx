import React from "react";
import service_four from "../images/debt-consolidation.webp";
import { Link } from "react-router-dom";
import ChatButton from "../components/ChatButton";


const DebtConsolidation = () => {
  return (
    <>
    
      <div className="content_page_wrapper">
        <div className="content_page_banner_wrapper">
          <div className="service_page_banner_wrapper_overlay">
            <h2>Debt Consolidation</h2>
          </div>

          <div className="text_content_wrapper">
            <div className="text_content">
              <div className="content_banner">
                <img src={service_four} alt="" />
              </div>
              <h1 className="page_title mt30 mb20">Debt Consolidation</h1>
              <p>
                5Minuteloan provides a robust debt consolidation service aimed
                at simplifying your financial management and alleviating your
                debt load. By merging multiple debts into a single loan with a
                lower interest rate, we help you streamline monthly payments and
                potentially reduce interest expenses. Our knowledgeable advisors
                collaborate with you to develop a customized consolidation plan
                tailored to your financial situation and objectives, ensuring
                you regain control over your finances without the hassle of
                managing multiple payments.
              </p>
              <br />
              <p>
                In addition to reducing your financial stress, 5Minuteloan's
                debt consolidation service offers transparent terms, allowing
                you to fully understand your new repayment plan. We strive to
                make the transition seamless, offering continuous support and
                guidance throughout the process. Our intuitive online platform
                enables you to monitor your progress and manage your account
                effortlessly. At 5Minuteloan, we are dedicated to helping you
                achieve financial stability and peace of mind through our
                effective debt consolidation solutions.
              </p>
              <br />
              <div className="button_container flex justify-center">
                <a href="https://agrimfincap.roopya.money/customer/personal_loan/c4f785faa778307080bb24382f32b9ec862f5f8af733408582f79bf59888aa7a/2f0be3f1474e21f6fa21b6fd407d7bf2891c74e73da741bf82ed2966a6d2aeb2">Apply Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatButton />
    </>
  );
};

export default DebtConsolidation;
