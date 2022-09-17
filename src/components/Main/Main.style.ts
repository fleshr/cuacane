import styled from "styled-components";

export const Container = styled.main`
  width: 89.5rem;
  flex: none;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
  padding: 5.5rem 5rem 2rem;
`;

export const CardWrapper = styled.div`
  padding: 2rem 4.8rem;
  margin: 0 0.2rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 4px;
    margin: 0 2px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e1e8ec;
    border-radius: 2px;
  }
`;
