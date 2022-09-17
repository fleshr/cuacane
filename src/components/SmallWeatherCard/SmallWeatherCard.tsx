import moment from "moment";
import { weatherCodes } from "../../constants/weatherCodes";
import { weatherImages } from "../../constants/weatherImages";
import * as S from "./SmallWeatherCard.style";

interface SmallWeatherCardProps {
  startTime: string;
  weatherCode: number;
  temperature: number;
}

function SmallWeatherCard({
  startTime,
  weatherCode,
  temperature,
}: SmallWeatherCardProps) {
  const weatherCodesMap = new Map(Object.entries(weatherCodes.weatherCode));
  const weatherImagesMap = new Map(Object.entries(weatherImages));

  const weather = weatherCodesMap.get(weatherCode.toString());
  const image = weatherImagesMap.get((weatherCode * 10).toString());

  const time =
    startTime !== "current"
      ? moment(startTime).utcOffset(startTime).format("hhA")
      : "Now";

  return (
    <S.Container>
      <S.Time>{time}</S.Time>
      <S.Icon>
        <img src={`./weather/${image}.png`} alt={weather} />
      </S.Icon>
      <S.Temp>{temperature}&#176;</S.Temp>
    </S.Container>
  );
}

export default SmallWeatherCard;
