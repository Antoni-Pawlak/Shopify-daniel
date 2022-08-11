import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["USA", "UK", "India"],
  datasets: [
    {
      label: "Stats",
      data: [20, 30, 40],
      backgroundColor: ["#171A1FFF", "#4069E5FF", "#E05858FF"],
    },
  ],
};

export function PieChart() {
  return <Pie data={data} />;
}
