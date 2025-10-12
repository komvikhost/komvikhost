// src/components/SkillCard.jsx
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function SkillCard({ title, labels, data, color, descriptions }) {
  const [desc, setDesc] = useState("👀 Click a bar to see details.");

  const chartData = {
    labels,
    datasets: [
      {
        label: "Experience Level",
        data,
        backgroundColor: color,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: (value) => {
            if (value === 0) return "Start";
            if (value === 20) return "Junior";
            if (value === 60) return "Middle";
            if (value === 100) return "Senior";
            return value;
          },
        },
      },
    },
    onClick: (evt, elements) => {
      if (elements.length > 0) {
        const idx = elements[0].index;
        const label = labels[idx];
        setDesc(descriptions[label]);
      }
    },
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow mx-auto mt-4 max-w-4xl text-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">{title}</h2>
      <div className="h-64">
        <Bar data={chartData} options={options} />
      </div>
      <p className="mt-4 text-gray-800 whitespace-pre-line px-2">{desc}</p>
    </div>
  );
}