import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import WeatherRow from "./WeatherRow/WeatherRow";

function DaysForecast() {
  const { weather } = useContext(WeatherContext);
  if (!weather) return <></>;

  const formatedWeather = weather.days.slice(1, 8).map((item) => {
    return {
      startTime: item.startTime,
      weatherCode: item.weatherCode,
      temperature: item.temperature,
    };
  });

  return (
    <section>
      {formatedWeather.map((item) => (
        <WeatherRow key={item.startTime} {...item} />
      ))}
    </section>
  );
}

export default DaysForecast;
