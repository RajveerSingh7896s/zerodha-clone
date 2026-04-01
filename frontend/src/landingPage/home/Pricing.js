import React from "react";

function Pricing() {
  return (
    <div className="container px-3 section-y">
      <div className="row g-4 align-items-start">
        <div className="col-12 col-lg-4">
          <h1 className="mb-4 h2">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="anchorTag d-inline-block mt-2">
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-12 col-lg-2 d-none d-lg-block" aria-hidden="true" />
        <div className="col-12 col-lg-6 px-lg-4">
          <div className="row g-3 pricing-cards">
            <div className="col-12 col-sm-6">
              <div className="border rounded-1 p-4 bg-white h-100 shadow-sm">
                <h1 className="mb-3 h2">₹0</h1>
                <p className="small mb-0 text-muted">Free equity delivery and direct mutual funds</p>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="border rounded-1 p-4 bg-white h-100 shadow-sm">
                <h1 className="mb-3 h2">₹20</h1>
                <p className="small mb-0 text-muted">Intraday and F&amp;O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
