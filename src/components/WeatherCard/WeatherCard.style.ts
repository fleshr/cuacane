import styled from "styled-components";
import bg from "../../assets/images/clouds-bg.png";

export const Container = styled.div`
  background-color: #c4e2ff;
  width: 100%;
  padding: 2.5rem 2.5rem 2.5rem 3.5rem;
  border-radius: 1.2rem;
  background-image: url(${bg});
  background-size: cover;

  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;

  color: #24609b;
`;
