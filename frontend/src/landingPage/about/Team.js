import React from "react";

function Team() {
  return (
    <div className="container px-3 pb-5">
      <div className="row px-2 px-md-3">
        <h1 className="text-center h2 text-muted">People</h1>
      </div>
      <div className="row g-4 py-4 py-md-5 align-items-start">
        <div className="col-12 col-md-5 col-lg-4 text-center text-md-start text-muted ps-md-4">
          <img
            className="founderImg mx-auto ms-md-0"
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
          />
          <h2 className="h5 mt-4 mb-1">Nithin Kamath</h2>
          <h3 className="h6 fw-normal text-muted">Founder, CEO</h3>
        </div>
        <div className="col-12 col-md-7 col-lg-8 text-muted fw-medium pe-md-4">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" className="anchorTag">
              Homepage
            </a>{" "}
            /{" "}
            <a href="" className="anchorTag">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" className="anchorTag">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
