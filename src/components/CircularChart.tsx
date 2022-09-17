import React from "react";

interface CircularChartProps {
  percentage: number;
}

function CircularChart({ percentage }: CircularChartProps) {
  function percentageToText(percentage: number) {
    if (percentage > 0 && percentage <= 25) return "Low";
    if (percentage > 25 && percentage <= 50) return "Moderate";
    if (percentage > 50 && percentage <= 75) return "High";
    if (percentage > 75 && percentage <= 100) return "Very High";
    return "No Rain";
  }

  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      width={106}
      height={106}
    >
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .circle {\n      fill: none;\n      stroke-width: 3;\n      stroke-linecap: round;\n      animation: progress 1s ease-out forwards;\n      stroke: #24609b;\n    }\n\n    .circle-bg {\n      fill: none;\n      stroke: #c4e2ff;\n      stroke-width: 3;\n    }\n    .percentage {\n      fill: #000;\n      font-family: inherit;\n      font-size: .34em;\n      text-anchor: middle;\n    }\n  ",
        }}
      />
      <path
        className="circle-bg"
        d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        className="circle"
        strokeDasharray={`${percentage}, 100`}
        d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x={18} y="20.35" className="percentage">
        {percentageToText(percentage)}
      </text>
    </svg>
  );
}

export default CircularChart;
