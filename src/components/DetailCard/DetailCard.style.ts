import styled from "styled-components";

export const Container = styled.div`
  background-color: #ecf3f8;
  border-radius: 1.2rem;
  padding: 3.3rem 3.5rem 3rem;

  display: flex;
  justify-content: space-between;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 2.2rem;
  color: black;
  font-weight: 400;
`;

export const Subtitle = styled.span`
  font-size: 1.7rem;
  color: #8e8d8d;
`;

export const Value = styled.span`
  font-size: 2.2rem;
  color: black;
`;

export const Graphic = styled.div`
  font-size: 1.8rem;
  font-weight: 500;

  & svg {
    height: 10.8rem;
    width: auto;
  }
`;
