import { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import TodayTemperature from "../TodatTemperature/TodayTemperature";
import * as S from "./WeatherCard.style";

interface WeatherCardProps {
  className?: string;
}

function WeatherCard({ className }: WeatherCardProps) {
  const { weather } = useContext(WeatherContext);
  const currentWeather = weather?.current[0];

  if (!currentWeather) return <></>;

  return (
    <S.Container className={className}>
      <CurrentWeather city={"Boston"} weather={currentWeather} />
      <TodayTemperature />
    </S.Container>
  );
}

export default WeatherCard;
