import styled from "styled-components";
import Menu from "../Menu/Menu";

export const Container = styled.div`
  width: 25.5rem;
  height: 100%;
  flex: none;
  padding: 5.5rem 0 5rem 5rem;
  border-right: 2px solid #e1e8ec;
  display: flex;
  flex-direction: column;
`;

export const StyledMenu = styled(Menu)`
  margin-top: 8rem;
  margin-bottom: auto;
`;
