import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { THEME_COLOR } from "../lib/constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Statistics(Total is grey, black is by us) ",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const data = {
  labels,
  datasets: [
    {
      label: "Total Sales",
      data: labels.map(() => Math.random()),
      backgroundColor: "#DEE1E6FF",
    },
    {
      label: "Sales by us",
      data: labels.map(() => Math.random()),
      backgroundColor: THEME_COLOR,
    },
  ],
};

export function CustomChart() {
  return <Bar options={options} data={data} />;
}
