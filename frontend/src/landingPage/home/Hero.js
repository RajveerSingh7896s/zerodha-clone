import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="container px-3 py-4 py-md-5 mb-4 mb-md-5">
      <div className="row text-center justify-content-center">
        <img
          src="media/images/homeHero.png"
          alt=""
          className="mb-4 mb-md-5 home-hero-img"
        />
        <h1 className="mt-3 mt-md-4 home-hero-title">Invest in everything</h1>
        <p className="px-2 mx-auto hero-lead">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          type="button"
          className="fs-6 mb-4 mb-md-5 allBtn"
          onClick={() => {if(localStorage.getItem("token") || sessionStorage.getItem("token")) {
            alert("You are already logged in , you can access dashboard");
          }else {
            navigate("/signup");}
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
