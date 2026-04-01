import React from "react";

function Hero() {
  return (
    <div className="container px-3 py-4 py-md-5 my-3 my-md-4">
      <div className="row text-center pb-4 pb-md-5 border-bottom">
        <h1 className="text-muted h2">Pricing</h1>
        <h2 className="text-muted fs-5 mt-3 px-2 pricing-hero-sub">
          Free equity investments and flat ₹20 traday and F&O trades
        </h2>
      </div>
      <div className="row text-center pt-4 pt-md-5 mt-3 mt-md-4 g-4">
        <div className="col-12 col-md-4 text-muted p-3">
            <div className="d-flex flex-column align-items-center">
                <img src="media/images/pricingEquity.svg" alt="" className="img-pricing-feature" />
                <h1 className="fs-3 my-3">Free equity delivery</h1>
                <p className="lh-lg small px-1">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
        </div>
        <div className="col-12 col-md-4 text-muted p-3">
            <div className="d-flex flex-column align-items-center">
                <img src="media/images/intradayTrades.svg" alt="" className="img-pricing-feature"/>
                <h1 className="fs-3 my-3">Intraday and F&O trades</h1>
                <p className="lh-lg small px-1">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
        </div>
        <div className="col-12 col-md-4 text-muted p-3">
            <div className="d-flex flex-column align-items-center">
                <img src="media/images/pricingEquity.svg" alt="" className="img-pricing-feature"/>
                <h1 className="fs-3 my-3">Free direct MF</h1>
                <p className="lh-lg small px-1">All direct mutual fund investments are absolutely free — ₹ 0 commissions &amp; DP charges.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
