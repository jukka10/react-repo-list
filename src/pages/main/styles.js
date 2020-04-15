import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 4px;
  }
`;
const rotate = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}`;
export const SubmitButton = styled.button.attrs((props) => ({
  disabled: props.loading,
}))`
  margin-left: 10px;
  padding: 0 15px;
  border: none;
  border-radius: 4px;
  background: #7159c1;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(113, 89, 193, 0.7);
  }

  &[disabled] {
    opacity: 0.7;
    cursor: not-allowed;
  }
  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  margin-top: 30px;
  list-style: none;
  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
