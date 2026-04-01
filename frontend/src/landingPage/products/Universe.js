import React from "react";
import { useNavigate } from "react-router-dom";

function Universe() {
  const navigate = useNavigate();
  return (
    <div className="container px-3 section-y">
      <div className="row text-center text-muted py-4">
        <h1 className="h5 px-2">
          Want to know more about our technology stack? Check out the{" "}
          <a href="" className="anchorTag">
            Zerodha.tech
          </a>{" "}
          blog.
        </h1>
      </div>
      <div className="row text-center text-muted py-3">
        <h1 className="h2">The Zerodha Universe</h1>
        <p className="px-2 mx-auto text-muted universe-lead">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row text-center text-muted g-4 py-4">
        <div className="col-12 col-md-4">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha fund house"
            className="img-universe-partner"
          />
          <p className="universeSubPara pt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-12 col-md-4">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull Logo"
            className="img-universe-partner"
          />
          <p className="universeSubPara pt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-12 col-md-4">
          <img
            src="media/images/tijori.svg"
            alt="Tijori"
            className="img-universe-partner"
          />
          <p className="universeSubPara pt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
      </div>
      <div className="row text-center text-muted g-4 py-4">
        <div className="col-12 col-md-4">
          <img
            src="media/images/streakLogo.png"
            alt="Streak Logo"
            className="img-universe-partner"
          />
          <p className="universeSubPara pt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-12 col-md-4">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase Logo"
            className="img-universe-partner"
          />
          <p className="universeSubPara pt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-12 col-md-4">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto Logo"
            className="img-universe-partner"
          />
          <p className="universeSubPara pt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <div className="row text-center">
        <button
          type="button"
          className="fs-6 mb-4 mb-md-5 allBtn"
          onClick={() => {
            if (
              localStorage.getItem("token") ||
              sessionStorage.getItem("token")
            ) {
              alert("You are already logged in , you can eccess dashboard");
            } else {
              navigate("/signup");
            }
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
