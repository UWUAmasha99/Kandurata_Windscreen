import styled from "styled-components";

const Input = styled.input.attrs(props => {
  return {
    placeholder: props.placeholder
  };
})`
  border: 1px solid ${props => props.borderColor};
  background: ${props => props.bgColor};
`;

export { Input };
