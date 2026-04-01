import React from "react";

function Awards() {
  return (
    <div className="container mt-4 mt-md-5 px-3 section-y">
      <div className="row pb-4 pb-md-5 align-items-start g-4">
        <div className="col-12 col-lg-6 p-3 p-lg-4 text-center text-lg-start">
          <img src="media/images/largestBroker.svg" alt="" className="img-fluid" />
        </div>

        <div className="col-12 col-lg-6 p-3 p-lg-4 mt-lg-5">
          <h1 className="h2">Largest stock borker in India</h1>
          <p className="mb-4 mb-md-5 text-muted">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row g-3">
            <div className="col-12 col-sm-6">
              <ul className="mb-0">
                <li>
                  <p className="mb-1">Features and Options</p>
                </li>
                <li>
                  <p className="mb-1">Commodity derivatives</p>
                </li>
                <li>
                  <p className="mb-1">Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6">
              <ul className="mb-0">
                <li>
                  <p className="mb-1">Stocks & IPOs</p>
                </li>
                <li>
                  <p className="mb-1">Direct mutual funds</p>
                </li>
                <li>
                  <p className="mb-1">Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" alt="Press logos" className="img-press mt-4" />
        </div>
      </div>
    </div>
  );
}

export default Awards;
