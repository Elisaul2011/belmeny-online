"use client";

import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import type { SalesDataPoint } from "../../types/dashboard";

Chart.register(...registerables);

const data: SalesDataPoint[] = Array.from({ length: 12 }, (_, i) => ({
  date: new Date(2023, i, 1).toLocaleDateString("en-US", { month: "short" }),
  sales: Math.floor(Math.random() * 1000) + 500,
  customers: Math.floor(Math.random() * 800) + 300,
  revenue: Math.floor(Math.random() * 1200) + 700,
}));

export function SalesChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient1.addColorStop(0, "rgba(59, 130, 246, 0.2)");
    gradient1.addColorStop(1, "rgba(59, 130, 246, 0)");

    const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient2.addColorStop(0, "rgba(249, 115, 22, 0.2)");
    gradient2.addColorStop(1, "rgba(249, 115, 22, 0)");

    const gradient3 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient3.addColorStop(0, "rgba(14, 165, 233, 0.2)");
    gradient3.addColorStop(1, "rgba(14, 165, 233, 0)");

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((d) => d.date),
        datasets: [
          {
            label: "Sales",
            data: data.map((d) => d.sales),
            borderColor: "#3b82f6",
            backgroundColor: gradient1,
            fill: true,
            tension: 0.4,
          },
          {
            label: "Customers",
            data: data.map((d) => d.customers),
            borderColor: "#f97316",
            backgroundColor: gradient2,
            fill: true,
            tension: 0.4,
          },
          {
            label: "Revenue",
            data: data.map((d) => d.revenue),
            borderColor: "#0ea5e9",
            backgroundColor: gradient3,
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
        interaction: {
          intersect: false,
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
      <canvas ref={chartRef} />
    </div>
  );
}
