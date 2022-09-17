import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  font-size: 2.1rem;
  font-weight: 700;
`;

export const Anchor = styled(Link)`
  display: flex;
  align-items: center;

  &:active,
  &:hover {
    opacity: 0.8;
  }
`;

export const Image = styled.img`
  width: 3.9rem;
  height: 3.9rem;
  border-radius: 50%;
`;

export const Text = styled.span`
  margin-left: 1.2rem;
`;
