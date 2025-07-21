import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();
  return (
    <div className="container p-5 mb-2">
      <div className="row text-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn fs-5 mb-5 allBtn"
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
