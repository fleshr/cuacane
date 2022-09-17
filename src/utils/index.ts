import moment from "moment";
import { RawIntervals, WeatherRaw } from "../interfaces/weather";

export function formatTime(time: string) {
  return moment(time).utcOffset(time).calendar(null, {
    sameDay: "[Today] hh:mm A",
    nextDay: "[Tomorrow] hh:mm A",
    lastDay: "[Yesterday] hh:mm A",
    sameElse: "hh:mm A",
  });
}

export function formatRawIntervals(intervals: RawIntervals) {
  return intervals.map((interval) => {
    return {
      startTime: interval.startTime,
      humidity: Math.round(interval.values.humidity),
      rainChance: Math.round(interval.values.precipitationProbability),
      pressure: Math.round(interval.values.pressureSurfaceLevel),
      temperature: Math.round(interval.values.temperature),
      uvIndex: interval.values.uvIndex,
      weatherCode: interval.values.weatherCode,
      windDirection: Math.round(interval.values.windDirection),
      windSpeed: Math.round(interval.values.windSpeed * 10) / 10,
    };
  });
}

export function formatWeatherData(weather: WeatherRaw) {
  const currentWeatherIndex = weather.data.timelines.findIndex(
    (item) => item.timestep === "current"
  );
  const currentWeather = weather.data.timelines[currentWeatherIndex].intervals;

  const hoursWeatherIndex = weather.data.timelines.findIndex(
    (item) => item.timestep === "1h"
  );
  const hoursWeather = weather.data.timelines[hoursWeatherIndex].intervals;

  const daysWeatherIndex = weather.data.timelines.findIndex(
    (item) => item.timestep === "1d"
  );
  const daysWeather = weather.data.timelines[daysWeatherIndex].intervals;

  const formattedWeather = {
    current: formatRawIntervals(currentWeather),
    hours: formatRawIntervals(hoursWeather),
    days: formatRawIntervals(daysWeather),
  };

  return formattedWeather;
}
