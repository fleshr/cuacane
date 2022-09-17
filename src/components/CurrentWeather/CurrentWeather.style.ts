import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.2rem 3rem 0.8rem 0;
`;

export const Main = styled.div``;

export const Footer = styled.div``;

export const Details = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Detail = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &:nth-child(2n) {
    justify-content: center;
  }

  &:nth-child(3n) {
    justify-content: flex-end;
  }

  & svg {
    font-size: 2.1rem;
    margin-right: 1rem;
  }
`;

export const Current = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Temperature = styled.span`
  font-size: 10.8rem;
  font-weight: 500;
  position: relative;
  margin-top: -0.5rem;

  ::after {
    content: "\\00b0";
    font-weight: 400;
    font-size: 5rem;
    position: absolute;
    top: 0.5rem;
  }
`;

export const Condition = styled.span`
  font-size: 1.7rem;
  margin-top: 0.8rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const City = styled.div`
  display: flex;
  align-items: center;

  font-size: 2.2rem;
  font-weight: 500;

  & svg {
    margin-right: 1.2rem;
  }
`;

export const Time = styled.span`
  font-size: 1.5rem;
`;
