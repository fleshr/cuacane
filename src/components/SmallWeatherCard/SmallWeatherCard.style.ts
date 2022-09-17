import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  padding: 1.4rem 0;
  margin-left: auto;

  &:first-child {
    background-color: #c4e2ff;
    margin-left: 0;
    margin-right: auto;
    width: 100%;
    border-radius: 1.2rem;
  }

  &:first-child img {
    filter: brightness(0) invert(1);
  }
`;

export const Time = styled.span`
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

export const Icon = styled.div`
  width: 3.4rem;
  height: 3.4rem;

  & img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Temp = styled.span`
  font-size: 1.7rem;
  font-weight: 500;
  margin-top: 1rem;
`;
