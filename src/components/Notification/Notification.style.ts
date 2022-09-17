import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  font-size: 2.4rem;

  & svg {
    display: block;
  }

  &::after {
    top: -2px;
    position: absolute;
    content: "";
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: #c4e2ff;
    border: 2.9px solid white;
    right: -1px;
  }
`;
