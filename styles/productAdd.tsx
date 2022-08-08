import styled from 'styled-components';

export const RadioButtonList = styled.div`
  display: flex;
`;

export const RadioButtonText = styled.span`
  font-size: 14px;
  width: 69px;
  height: 40px;
  background: white;
  color: #5a5e6a;
  border-radius: 8px;
  border: 1px solid #e4e6ea;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const RadioButton = styled.input.attrs({ type: 'radio' })`
  &:checked {
    display: inline-block;
    text-align: center;
    line-height: 21px;
    display: none;
    background: grey;
  }
  &:checked + ${RadioButtonText} {
    background: #226bef;
    color: #fff;
  }
  display: none;
`;
