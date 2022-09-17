import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: stretch;
`;

export const Label = styled.label`
  font-size: 2.2rem;

  & svg {
    display: block;
  }
`;

export const Input = styled.input`
  padding: 0;
  border: 0;
  padding-left: 1.5rem;
  font-size: 1.5rem;
  font-family: inherit;

  &::placeholder {
    color: #bfc3c8;
  }
`;
