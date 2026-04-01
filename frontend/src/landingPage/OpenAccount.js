import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();
  return (
    <div className="container px-3 py-4 py-md-5 mb-2 section-y">
      <div className="row text-center justify-content-center">
        <h1 className="mt-3 h2">Open a Zerodha account</h1>
        <p className="text-muted px-2 hero-lead mx-auto">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&amp;O trades.
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

export default OpenAccount;
