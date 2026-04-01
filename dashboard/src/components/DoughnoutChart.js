import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: { top: 4, bottom: 4, left: 4, right: 4 },
  },
  plugins: {
    legend: {
      position: "bottom",
      align: "center",
      labels: {
        boxWidth: 10,
        padding: 10,
        usePointStyle: true,
        font: { size: 10 },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
};

export function DoughnutChart({ data }) {
  return (
    <div className="watchlist-chart-canvas">
      <Doughnut data={data} options={chartOptions} />
    </div>
  );
}
