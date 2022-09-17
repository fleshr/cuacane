import styled from "styled-components";
import Forecast from "../Forecast";

export const Container = styled.div`
  width: 38.5rem;
  flex: none;
  height: 100%;
  border-left: 2px solid #e1e8ec;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  padding: 6rem 3.5rem 0;
`;

export const Button = styled.button`
  border: 0;
  padding: 0;
  background-color: transparent;
  font-size: 2.6rem;

  & svg {
    display: block;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.h2`
  margin: 0;

  font-size: 2.1rem;
  font-weight: 500;
`;

export const Tabs = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const StyledForecast = styled(Forecast)`
  overflow: auto;
  padding: 2rem 3.3rem;
  margin: 0 0.2rem;
  margin-top: 3rem;

  &::-webkit-scrollbar {
    width: 4px;
    padding: 0 2px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e1e8ec;
    border-radius: 2px;
  }
`;
