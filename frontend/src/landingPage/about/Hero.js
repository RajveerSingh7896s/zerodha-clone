import React from "react";

function Hero() {
  return (
    <div className="container px-3 py-4 py-md-5">
      <div className="row py-4 py-md-5">
        <h1 className="text-center h3 text-muted px-2">
          We pioneered the discount broking model in India.
        </h1>
        <h1 className="text-center h3 text-muted mb-4 mb-md-5 pb-2 px-2">
          Now, we are breaking ground with our technology.
        </h1>
        <hr className="text-muted mt-3 opacity-25" />
      </div>
      <div className="row g-4 py-4 py-md-5">
        <div className="col-12 col-lg-6 text-muted fw-medium lh-lg px-2 px-lg-4">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and &quot;Rodha&quot;, the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-12 col-lg-6 text-muted fw-medium lh-lg px-2 px-lg-4">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a className="anchorTag" href="">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a className="anchorTag" href="">
              blog
            </a>{" "}
            or see what the media is{" "}
            <a className="anchorTag" href="">
              saying about us
            </a>{" "}
            or learn more about our business and product{" "}
            <a className="anchorTag" href="">
              philosophies
            </a>
            .
          </p>
        </div>
      </div>
      <hr className="text-muted mt-3 opacity-25" />
    </div>
  );
}

export default Hero;
