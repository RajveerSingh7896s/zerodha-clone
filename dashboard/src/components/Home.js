import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <div className="dashboard-app">
      <TopBar />
      <Dashboard />
    </div>
  );
};

export default Home;
