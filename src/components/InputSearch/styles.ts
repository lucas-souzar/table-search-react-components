import styled from "styled-components";

export interface Props {
  size?: string;
}

export const Container = styled.div<Props>`
  width: ${({ size }) => (size === "fullwidth" ? "100%" : "256px")};

  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 0.5rem;
  border-radius: 5px;
  outline: 1px solid #707070;
  box-sizing: border-box;

  &:hover {
    outline-width: 2px;
  }

  input {
    flex-grow: 1;
    border: none;
    color: #737373;

    &:focus {
      outline: 0;
    }
  }

  button {
    display: flex;
    height: inherit;
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
  }
`;
