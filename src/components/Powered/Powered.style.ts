import styled from "styled-components";

export const Link = styled.a`
  width: 14rem;
  display: block;

  &:active,
  &:hover {
    opacity: 0.7;
  }

  & img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
