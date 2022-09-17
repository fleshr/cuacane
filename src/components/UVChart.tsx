interface UVChartProps {
  index: number;
}

function UVChart({ index }: UVChartProps) {
  function getUVIndexCategory(index: number) {
    if (index >= 0 && index <= 2) return "Low";
    if (index >= 3 && index <= 5) return "Moderate";
    if (index >= 6 && index <= 7) return "High";
    if (index >= 8 && index <= 10) return "Very High";
    if (index >= 11) return "Extreme";
  }

  function indexToPercentage(index: number) {
    if (index > 11) return 100;
    return (index / 11) * 100;
  }

  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 112 90"
      width={112}
      height={112}
    >
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .dot {\n      fill: white;\n      filter: drop-shadow( 0 0 1px rgba(0, 0, 0, .7));\n    }\n\n    .text {\n      font-family: inherit;\n      font-size: inherit;\n    }\n  ",
        }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4cb482" />
          <stop offset="30%" stopColor="#f3fe73" />
          <stop offset="70%" stopColor="#ffa552" />
          <stop offset="100%" stopColor="#ff5b42" />
        </linearGradient>
      </defs>
      <path
        d="M 14,84
A 50 50 0 1 1 98,84"
        fill="none"
        strokeWidth={6}
        strokeLinecap="round"
        stroke="url(#gradient)"
      />
      <path
        className="dot"
        d="M 14,79
a 4 4 0 0 0 0,8
a 4 4 0 0 0 0,-8"
        transform={`rotate(${(indexToPercentage(index) / 100) * 244} 56 57)`}
      />
      <text x={56} y={60} textAnchor="middle" className="text">
        {getUVIndexCategory(index)}
      </text>
    </svg>
  );
}

export default UVChart;
