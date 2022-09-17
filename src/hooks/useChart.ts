import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";
import { RefObject, useEffect } from "react";
import gradient from "chartjs-plugin-gradient";
Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
  gradient
);

interface useChartProps {
  canvas: RefObject<HTMLCanvasElement>;
  temps: number[] | undefined;
}

function useChart({ canvas, temps }: useChartProps) {
  useEffect(() => {
    if (canvas.current && temps) {
      const ctx = canvas.current;
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          datasets: [
            {
              data: [
                {
                  x: 1,
                  y: (temps[0] - temps[3]) / 2 + temps[3],
                },
                {
                  x: 2,
                  y: temps[0],
                },
                {
                  x: 4,
                  y: temps[1],
                },
                {
                  x: 6,
                  y: temps[2],
                },
                {
                  x: 8,
                  y: temps[3],
                },
                {
                  x: 9,
                  y: (temps[3] - temps[0]) / 2 + temps[0],
                },
              ],
              tension: 0.3,
              pointBorderColor: [
                "transparent",
                "#badcff",
                "#badcff",
                "#badcff",
                "#badcff",
                "transparent",
              ],
              pointBorderWidth: 2,
              pointRadius: 5,
              pointBackgroundColor: [
                "transparent",
                "white",
                "white",
                "white",
                "white",
                "transparent",
              ],
              borderWidth: 2,
              backgroundColor: "transparent",
              gradient: {
                borderColor: {
                  axis: "x",
                  colors: {
                    0: "rgba(37, 97, 155, 0)",
                    3: "rgba(37, 97, 155, 1)",
                    5: "rgba(37, 97, 155, 1)",
                    8: "rgba(37, 97, 155, 0)",
                  },
                },
              },
            },
          ],
        },
        options: {
          animation: {
            duration: 0,
          },
          events: [],
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              grid: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                display: false,
              },
              min: Math.min(...temps) - 3,
              max: Math.max(...temps) + 3,
            },
            x: {
              grid: {
                lineWidth: 1,
                color: ["transparent", "rgba(255, 255, 255, .2)"],
                drawBorder: false,
              },
              ticks: {
                display: false,
              },
            },
          },
        },
      });

      return () => myChart.destroy();
    }
  }, [canvas, temps]);
}

export default useChart;
