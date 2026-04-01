import React from "react";

function Hero() {
  return (
    <div className="container-fluid pb-4 support-hero">
      <div className="container py-4 py-md-5 px-3 text-white">
        <div className="row g-4 g-lg-5">
        <div className="col-12 col-lg-7">
          <h1 className="fs-5 pb-3 pb-md-4">Support Portal</h1>
          <p className="support-hero-tagline pb-3 mb-0">
            Search for an answer or browse help topics to create a ticket
          </p>
          <form role="search">
            <input
              className="form-control supportSearch w-100"
              type="search"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
            />
          </form>
          <div className="my-3 lh-lg d-flex flex-wrap support-link-row">
            <a className="underline-offset" href="">
              Track account opening
            </a>
            <a className="underline-offset" href="">
              Track segment activation
            </a>
            <a className="underline-offset" href="">
              Intraday margins
            </a>
            <a className="underline-offset" href="">
              Kite user manual
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-5 text-lg-end text-start">
          <a className="underline-offset d-inline-block" href="">
            Track tickets
          </a>
          <h2 className="text-start fs-6 mt-4 mt-lg-5 p-2 p-lg-3 mb-0">Featured</h2>
          <ol className="text-start underline-offset ps-4 ps-lg-5 small">
            <li className="mb-2">Exclusion of F&O contracts on 8 securities from August 29, 2025</li>
            <li>Revision in expiry day of Index and Stock derivatives contracts</li>
          </ol>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Hero;
