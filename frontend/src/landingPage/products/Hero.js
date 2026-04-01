import React from "react";

function Hero() {
  return (
    <div className="container px-3 py-4 py-md-5">
      <div className="row text-center text-muted p-3 p-md-5 mb-4 mb-md-5">
        <h1 className="fw-semibold h2">Zerodha Products</h1>
        <h2 className="fs-5 fw-normal mt-2">Sleek, modern, and intuitive trading platforms</h2>
        <h3 className="fs-6 pt-3 fw-normal mb-0">
          Check out our{" "}
          <a className="anchorTag" href="">
            investment offerings <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </h3>
      </div>
      <hr className="m-4 m-md-5 opacity-25" />
    </div>
  );
}

export default Hero;
