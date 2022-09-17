import DaysForecast from "./DaysForecast";
import TodayForecast from "./TodayForecast/TodayForecast";

interface ForecastProps {
  className?: string;
}

function Forecast({ className }: ForecastProps) {
  return (
    <div className={className}>
      <TodayForecast />
      <DaysForecast />
    </div>
  );
}

export default Forecast;
