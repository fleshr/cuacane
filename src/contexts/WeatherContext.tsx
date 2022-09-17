import React, { PropsWithChildren, useEffect, useState } from "react";
import { WeatherInterface } from "../interfaces/weather";
import { weather as WeatherMock } from "../mock/Weather";
import { formatWeatherData } from "../utils";

interface WeatherContextInterface {
  weather: WeatherInterface | null;
}

export const WeatherContext = React.createContext(
  {} as WeatherContextInterface
);

function WeatherProvider({ children }: PropsWithChildren) {
  const [weather, setWeather] = useState<WeatherInterface | null>(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: { Accept: "application/json", "Accept-Encoding": "gzip" },
    };

    fetch(
      "https://api.tomorrow.io/v4/timelines?location=42.3478%2C%20-71.0466&fields=precipitationProbability&fields=temperature&fields=humidity&fields=windSpeed&fields=windDirection&fields=pressureSurfaceLevel&fields=weatherCode&fields=uvIndex&fields=weatherCode&units=metric&timesteps=current&timesteps=1h&timesteps=1d&timezone=US%2FEastern&apikey=faDp60WMCBJ1guFe0g21TrdmPMqZxcKs    ",
      options
    )
      .then((response) => response.json())
      .then((response) => setWeather(formatWeatherData(response)))
      .catch((err) => console.error(err));

    // setWeather(formatWeatherData(WeatherMock));
  }, []);

  return (
    <WeatherContext.Provider value={{ weather }}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherProvider;
