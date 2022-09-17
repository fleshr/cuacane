import moment from "moment";
import { weatherCodes } from "../../constants/weatherCodes";
import { weatherImages } from "../../constants/weatherImages";
import * as S from "./WeatherRow.style";

interface WeatherRowProps {
  startTime: string;
  weatherCode: number;
  temperature: number;
}

function WeatherRow({ startTime, weatherCode, temperature }: WeatherRowProps) {
  const weatherCodesMap = new Map(Object.entries(weatherCodes.weatherCode));
  const weatherImagesMap = new Map(Object.entries(weatherImages));

  const weather = weatherCodesMap.get(weatherCode.toString());
  const image = weatherImagesMap.get((weatherCode * 10).toString());

  const weekDay = moment(startTime).utcOffset(startTime).format("dddd");
  const day = moment(startTime).utcOffset(startTime).format("D MMM");

  return (
    <S.Container>
      <S.Date>
        <S.Time>{weekDay}</S.Time>
        <S.Day>{day}</S.Day>
      </S.Date>
      <S.Temp>{temperature}&#176;</S.Temp>
      <S.Icon>
        <img src={`./weather/${image}.png`} alt={weather} />
      </S.Icon>
    </S.Container>
  );
}

export default WeatherRow;
