import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.3rem;
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Time = styled.span`
  font-size: 1.7rem;
  font-weight: 500;
  color: black;
`;

export const Day = styled.span`
  font-size: 1.6rem;
  color: #838383;
  margin-top: 1.2rem;
`;

export const Temp = styled.span`
  margin-left: auto;
  font-size: 2.2rem;
  font-weight: 500;
  color: black;
`;

export const Icon = styled.div`
  width: 5rem;
  height: 5rem;
  margin-left: 7rem;

  & img {
    display: block;
    height: 100%;
    width: 100%;
  }
`;
