import { FiWind, FiDroplet, FiMapPin } from "react-icons/fi";
import { RiWindyFill } from "react-icons/ri";
import { weatherCodes } from "../../constants/weatherCodes";
import { IntervalInterface } from "../../interfaces/weather";
import { formatTime } from "../../utils";
import * as S from "./CurrentWeather.style";

export interface CurrentWeatherProps {
  city: string;
  weather: IntervalInterface;
}

function CurrentWeather({
  city,
  weather: {
    startTime,
    temperature,
    weatherCode,
    pressure,
    humidity,
    windSpeed,
  },
}: CurrentWeatherProps) {
  const weatherCodesMap = new Map(Object.entries(weatherCodes.weatherCode));

  return (
    <S.Container>
      <S.Header>
        <S.City>
          <FiMapPin />
          <span>{city}</span>
        </S.City>
        <S.Time>{formatTime(startTime)}</S.Time>
      </S.Header>
      <S.Main>
        <S.Current>
          <S.Temperature>{temperature}</S.Temperature>
          <S.Condition>
            {weatherCodesMap.get(weatherCode.toString())}
          </S.Condition>
        </S.Current>
      </S.Main>
      <S.Footer>
        <S.Details>
          <S.Detail>
            <RiWindyFill />
            <span>{pressure}hpa</span>
          </S.Detail>
          <S.Detail>
            <FiDroplet />
            <span>{humidity}%</span>
          </S.Detail>
          <S.Detail>
            <FiWind />
            <span>{windSpeed}km/h</span>
          </S.Detail>
        </S.Details>
      </S.Footer>
    </S.Container>
  );
}

export default CurrentWeather;
