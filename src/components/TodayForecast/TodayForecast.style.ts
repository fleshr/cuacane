import styled from "styled-components";

export const Container = styled.section``;

export const Title = styled.h3`
  font-size: 1.7rem;
  font-weight: 500;
  color: black;
  margin: 0;
  margin-bottom: 2.5rem;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: calc(25% + 0.5rem) 1fr 1fr 1fr;
`;
