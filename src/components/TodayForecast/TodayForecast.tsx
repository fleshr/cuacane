import moment from "moment";
import { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import SmallWeatherCard from "../SmallWeatherCard/SmallWeatherCard";
import * as S from "./TodayForecast.style";

interface ShortWeatherInterface {
  startTime: string;
  temperature: number;
  weatherCode: number;
}

function TodayForecast() {
  const { weather } = useContext(WeatherContext);
  if (!weather) return <></>;

  const formatedWeather: Array<ShortWeatherInterface> = [
    {
      startTime: "current",
      temperature: weather.current[0].temperature,
      weatherCode: weather.current[0].weatherCode,
    },
  ];

  const test: Array<ShortWeatherInterface> = weather.hours
    .filter((item) => {
      const time1 = moment(item.startTime).utcOffset(item.startTime);
      const time2 = moment(weather.current[0].startTime).utcOffset(
        weather.current[0].startTime
      );
      const diff = time1.diff(time2);
      if (diff > 0) return true;
      return false;
    })
    .slice(0, 3);

  formatedWeather.push(...test);

  return (
    <S.Container>
      <S.Title>Today</S.Title>
      <S.CardContainer>
        {formatedWeather.map((item, index) => (
          <SmallWeatherCard key={index} {...item} />
        ))}
      </S.CardContainer>
    </S.Container>
  );
}

export default TodayForecast;
