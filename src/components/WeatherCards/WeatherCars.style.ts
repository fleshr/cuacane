import styled from "styled-components";
import WeatherCard from "../WeatherCard/WeatherCard";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
`;

export const StyledWeather = styled(WeatherCard)`
  grid-area: 1 / 1 / 2 / 3;
`;
