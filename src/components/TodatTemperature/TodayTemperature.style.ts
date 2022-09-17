import styled from "styled-components";

export const Content = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 1.5rem;
  padding: 3rem 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 2.2rem;
  font-weight: 500;
  margin: 0 1.8rem;
  padding-bottom: 4rem;
`;

export const Chart = styled.div`
  height: 13.5rem;
`;

export const Temp = styled.div`
  padding: 0 2.5%;
  margin: 0.5rem 0;
`;

export const TempList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const TempItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TempTime = styled.span`
  font-size: 1.3rem;
`;

export const TempValue = styled.span`
  margin-top: 1rem;
  font-size: 1.6rem;
  font-weight: 500;

  &::after {
    content: "\\00b0";
  }
`;
