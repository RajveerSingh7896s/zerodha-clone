import React from "react";

function Education() {
  return (
    <div className="container mt-4 mt-md-5 px-3 section-y">
      <div className="row g-4 align-items-center">
        <div className="col-12 col-lg-6 p-3 p-lg-4 text-center text-lg-start">
          <img src="media/images/education.svg" alt="" className="img-education mx-auto ms-lg-0" />
        </div>

        <div className="col-12 col-lg-6 p-3 p-lg-4 mt-lg-5">
          <h1 className="h2 mb-4">Free and open market education</h1>
          <p className="mt-3 mt-md-4 text-muted">
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <a href='' className="anchorTag d-inline-block mt-2">Versity <i className="fa-solid fa-arrow-right-long"></i></a>
          <p className="mt-4 text-muted">
            TradingQ&A, the most active trading and investment community in India for all your market related queries.
          </p>
          <a href='' className="anchorTag d-inline-block mt-2">TradingQ&A <i className="fa-solid fa-arrow-right-long"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Education;
