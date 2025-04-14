import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const data = {
  labels: [
    "FERRETERIA MONTES V.",
    "FERRETERIA LA CALIZA",
    "FERRETERIA LAS TRES",
    "DISTRIBUIDORA DISLAMA",
    "FERRE ALTO C.A",
    "FERRETERIA EL VAQUIRO",
    "GRUPO FERRETERO PALA",
    "FERRO-TOOL, C.A",
    "CENTRO FERRETERO L",
    "FERRE CASTRO, C.A",
  ],
  datasets: [
    {
      label: "INGCO Products",
      data: [47, 46, 42, 33, 27, 27, 24, 22, 20, 18],
      backgroundColor: "rgb(249, 115, 22)",
      borderColor: "rgb(249, 115, 22)",
      borderWidth: 1,
    },
    {
      label: "VERT Products",
      data: [6, 3, 6, 7, 11, 1, 0, 7, 4, 4],
      backgroundColor: "rgb(59, 130, 246)",
      borderColor: "rgb(59, 130, 246)",
      borderWidth: 1,
    },
  ],
};

export function ProductComparisonChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data,
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Top Products Purchased by Client",
            padding: 20,
            font: {
              size: 16,
              weight: "bold",
            },
          },
          subtitle: {
            display: true,
            text: ["Average INGCO: 8.7%", "Average VERT: 2.27%"],
            padding: {
              bottom: 20,
            },
          },
          legend: {
            position: "top",
          },
        },
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false,
            },
          },
          y: {
            stacked: true,
            grid: {
              display: false,
            },
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
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="h-[600px]">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}
