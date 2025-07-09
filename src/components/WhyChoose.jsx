import React from 'react';
import Icon1 from '../images/icon1.png'
import Icon2 from '../images/icon2.png'
import Icon3 from '../images/icon3.png'
import Icon4 from '../images/icon4.png'


const cardData = [
  {
    icon: Icon1,
    title: 'Health',
    description:
      'At 5 Minute Loan we provide immediate financial assistance by way of loan, for your untimely medical bills or emergencies. You can tackier of your loved ones without any financial fears!',
    // dark: true,
  },
  {
    icon: Icon2,
    title: 'Unexpected Expenses',
    description:
      "5 Minute helps you handle unexpected expenses in just a fraction of second. Whether it's a medical bill, car repair, or wedding costs, our quick application gets you funds in as little as 5 minutes with flexible loan options.",
  },
  {
    icon: Icon3,
    title: 'Credit Card Pay',
    description:
      'At , we consolidate your high-interest loans into a single loan with fixed terms, allowing you to manage your payments more easily and pay off debt faster!',
  },
  {
    icon: Icon4,
    title: 'Vacation',
    description:
      'Your well-deserved vacation doesn’t have to be put on hold due to the lack of finances! With our 5Minute Loan’s quickest services, you can enjoy your dream trip without any delay.',
  },
];

const WhyChoose = () => {
  return (
    <div className="loan-benefits-section">
      <div className="cards-wrapper">
        {cardData.map((item, index) => (
          <div
            key={index}
            className={`benefit-card ${item.dark ? 'dark' : ''}`}
          >
            <div className="icon-circle">
              <img src={item.icon} alt={item.title} className="icon-img" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .loan-benefits-section {
          background: #39c1ac;
          border-radius: 40px;
          padding: 60px 20px;
          margin: 50px 50px;
        }

        .cards-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 30px;
          max-width: 1200px;
          margin: auto;
        }

        .benefit-card {
          background: transparent;
          flex: 1 1 220px;
          border-radius: 20px;
          padding: 30px;
          color: #1d1d1d;
          max-width: 280px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

    .benefit-card:hover {
  background: #16354a;
  color: white;
}

.benefit-card:hover h3,
.benefit-card:hover p {
  color: white;
}


        .benefit-card:hover .icon-circle {
          background: #ffffff33;
        }

        .benefit-card.dark {
          background: #16354a;
          color: white;
        }

        .icon-circle {
          background: white;
          border-radius: 50%;
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: background 0.3s ease;
        }

        .icon-img {
          width: 62px;
          height: 62px;
        }

        h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        p {
          font-size: 15px;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .cards-wrapper {
            flex-direction: column;
            align-items: center;
          }

          .benefit-card {
            max-width: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default WhyChoose;
