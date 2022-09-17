import moment from "moment";
import { useContext, useRef } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import useChart from "../../hooks/useChart";
import * as S from "./TodayTemperature.style";

function TodayTemperature() {
  const { weather } = useContext(WeatherContext);

  const formattedWeather = weather?.hours
    .filter(
      (item) => !(moment(item.startTime).utcOffset(item.startTime).hour() % 6)
    )
    .slice(0, 4)
    .map((item) => {
      const dayTimes = ["Night", "Morning", "Noon", "Evening"];
      return {
        daytime:
          dayTimes[moment(item.startTime).utcOffset(item.startTime).hour() / 6],
        temperature: item.temperature,
      };
    });

  const temps = formattedWeather?.map((item) => item.temperature);

  const canvas = useRef<HTMLCanvasElement>(null);
  useChart({ canvas, temps });

  return (
    <section>
      <S.Content>
        <S.Title>Temperature</S.Title>
        <S.Chart>
          <canvas ref={canvas} width={0} height={0}></canvas>
        </S.Chart>
        <S.Temp>
          <S.TempList>
            {formattedWeather?.map((item) => (
              <S.TempItem key={item.daytime}>
                <S.TempTime>{item.daytime}</S.TempTime>
                <S.TempValue>{item.temperature}</S.TempValue>
              </S.TempItem>
            ))}
          </S.TempList>
        </S.Temp>
      </S.Content>
    </section>
  );
}

export default TodayTemperature;
