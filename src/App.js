import "./App.css";
import React, { useEffect, useState } from "react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import logo from "./assets/images/LOGO.svg";
import search from "./assets/images/Search.svg";
import ads from "./assets/images/Iconads.svg";
import clock from "./assets/images/Iconclock1.svg";
import book from "./assets/images/Iconbook.svg";
import scholor from "./assets/images/Iconscholor.svg";
import razorpay from "./assets/images/Razorpay.svg";
import live from "./assets/images/Icon.svg";
import limitedtime from "./assets/images/IconClock.svg";

const App = () => {
  const plans = [
    {
      id: "twelve",
      label: "12 Months Subscription",
      total: 179,
      perMonth: 15,
      disabled: false,
      recommended: true,
    },
    {
      id: "six",
      label: "6 Months Subscription",
      total: 149,
      perMonth: 25,
      disabled: false,
      recommended: false,
    },
    {
      id: "three",
      label: "3 Months Subscription",
      total: 99,
      perMonth: 33,
      disabled: false,
      recommended: false,
    },
  ];

  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(0);

  useEffect(() => {
    const gstPercentage = 18; //
    const gstAmount = (selectedPlan.total * gstPercentage) / 100;
    const totalPriceWithGST = selectedPlan.total + gstAmount;

    setTotalPrice(totalPriceWithGST);
  }, [selectedPlan]);

  useEffect(() => {
    setTotalPrice(0);
  }, []);

  const selectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <main className="main_page">
      <header className="header">
        <nav className="navbar">
          <aside>
            <img src={logo} alt="/" className="logo" />
            <select>
              <option value="Courses">Courses</option>
            </select>
            <select>
              <option value="Programs">Programs</option>
            </select>
          </aside>
          <aside>
            <img src={search} alt="/" />
            <span>Login</span>
            <button className="join_btn">Join now</button>
          </aside>
        </nav>
      </header>

      <div className="container">
        <aside className="right_aside">
          <div>
            <h1>Access curated courses worth</h1>
            <h1>
              &#8377;<span className="orig_amount">18500 </span> at just
              <span className="disc_amount">&#8377; 99</span> per year!
            </h1>
          </div>
          <div className="content_details">
            <p>
              <img src={book} alt="/" /> <span>100+</span> Job relevant courses
            </p>
            <p>
              <img src={clock} alt="/" /> <span>20,000+</span> Hours of content
            </p>
            <p>
              <img src={live} alt="/" /> <span>Exclusive</span> webinar access
            </p>
            <p>
              <img src={scholor} alt="/" /> Scholorships worth
              <span>&#8377;94,500</span>
            </p>
            <p>
              <img src={ads} alt="/" /> <span>Ad Free</span> learning experience
            </p>
          </div>
        </aside>

        <aside className="left_aside">
          <div className="top-nav">
            <div className="top">
              <button className="number">1</button>
              <label>Signup</label>
            </div>
            <div className="top">
              <button className="number">2</button>
              <label>Subscribe</label>
            </div>
          </div>

          <h4>Select your subscription plan</h4>
          <section className="payment_section">
            <label htmlFor="disabled" className="select-payment disabled">
              <span className="offerexpire">Offer expired</span>
              <div className="payment-select">
                <input type="radio" name="payment-dis" id="disabled" checked />
                <p>12 Months Subscription</p>
              </div>
              <div className="optional_pay">
                <span>Total</span> <p className="amount">&#8377;99</p>
                <br />
                <span>&#8377;8</span> <span className="permonth">/month</span>
              </div>
            </label>
            {plans.map((plan) => (
              <label htmlFor={plan.id} className="select-payment" key={plan.id}>
                {!plan.disabled && plan.recommended && (
                  <span className="recommended">Recommended</span>
                )}
                <div className="payment-select">
                  {plan.id !== selectedPlan.id && (
                    <RiCheckboxBlankCircleLine className="uncheckbox" />
                  )}
                  {plan.id === selectedPlan.id && (
                    <RiCheckboxCircleFill className="checkbox" />
                  )}
                  <input
                    className="radio"
                    type="radio"
                    name="payment"
                    id={plan.id}
                    checked={plan.id === selectedPlan.id}
                    onChange={() => selectPlan(plan)}
                    disabled={plan.disabled}
                  />
                  <p>{plan.label}</p>
                </div>
                <div className="optional_pay">
                  <span>Total</span>
                  <p className="amount">&#8377;{plan.total}</p>
                  <br />
                  <span>&#8377;{plan.perMonth}</span>
                  <span className="permonth">/month</span>
                </div>
              </label>
            ))}
          </section>
          <hr />

          <div className="sub-fee">
            <span>Subscription Fee</span>
            <span>&#8377;18,500</span>
          </div>

          <div className="limited">
            <div className="sub-fee">
              <span>Limited time offer</span>
              <span>&#8377;18,401</span>
            </div>
            <div className="sub">
              <img src={limitedtime} alt="/" />
              <span>Offer valid till 25th March 2023</span>
            </div>
          </div>
          <div className="sub-fee">
            <span>
              <strong>Total</strong> (Incl. of 18% GST)
            </span>
            <span className="total">&#8377;{totalPrice}</span>
          </div>

          <div className="btn-box">
            <button className="cancel-btn">cancel</button>
            <button className="pay-btn">proceed to pay</button>
          </div>

          <img src={razorpay} alt="/" className="razor" />
        </aside>
      </div>
    </main>
  );
};

export default App;
