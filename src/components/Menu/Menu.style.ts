import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MenuList = styled.ul`
  color: #62626f;
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.li`
  position: relative;
  margin-bottom: 4rem;
`;

export const LinkText = styled.span`
  margin-left: 1.5rem;
`;

export const StyledLink = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  padding: 1rem 0;

  & svg {
    font-size: 2.2rem;
    color: #9aacb6;
  }

  &:active,
  &:hover,
  &:active svg,
  &:hover svg {
    color: #0c0b20;
  }

  ${({ $isActive }) =>
    $isActive &&
    `
      color: #0c0b20;
      font-weight: 500;

      & svg {
        color: #0c0b20;
      }

      &::after {
        content: "";
        position: absolute;
        width: 2px;
        height: 100%;
        background-color: currentColor;
        right: -2px;
        box-shadow: 0px 2rem 0 white, 0px -2rem 0 white;
      }
    `}
`;
