import { useState } from 'react';
import styled from 'styled-components';
import { StyledRadioProps } from '../../interface/productAdd';

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

export default function StyledRadio(props: StyledRadioProps) {
  const [checked, setChecked] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setChecked(target.value);
    console.log(target.value);
  };

  return (
    <>
      <label>
        <RadioButton
          type="radio"
          name="category"
          value={props.id}
          checked={checked === props.id}
          onChange={handleChange}
        />
        <RadioButtonText>{props.name}</RadioButtonText>
      </label>
    </>
  );
}
