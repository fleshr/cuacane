import DetailCard from "../DetailCard/DetailCard";
import CircularChart from "../CircularChart";
import Compass from "../Compass";
import UVChart from "../UVChart";
import PressureChart from "../PressureChart";
import * as S from "./WeatherCars.style";
import { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";

interface WeatherCardsProps {
  className?: string;
}

function WeatherCards({ className }: WeatherCardsProps) {
  const { weather } = useContext(WeatherContext);

  const currentWeather = weather?.current[0];
  if (!currentWeather) return <></>;

  const { windSpeed, windDirection, rainChance, pressure, uvIndex } =
    currentWeather;

  return (
    <S.Container className={className}>
      <S.StyledWeather />
      <DetailCard
        title="Wind"
        subtitle="Today wind speed"
        value={`${windSpeed}km/h`}
        icon={<Compass direction={windDirection} />}
      />
      <DetailCard
        title="Rain Chance"
        subtitle="Today rain chance"
        value={`${rainChance}%`}
        icon={<CircularChart percentage={rainChance} />}
      />
      <DetailCard
        title="Pressure "
        subtitle="Today pressure"
        value={`${pressure} hpa`}
        icon={<PressureChart pressure={pressure} />}
      />
      <DetailCard
        title="UV Index"
        subtitle="Today UV Index"
        value={uvIndex}
        icon={<UVChart index={uvIndex} />}
      />
    </S.Container>
  );
}

export default WeatherCards;
