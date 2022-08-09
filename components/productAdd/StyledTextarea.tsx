import React from 'react';
import styled from 'styled-components';
import { StyledTextareaProps } from '../../interface/productAdd';
import { ProductAddLabel } from '../../styles/productAdd';

export const TextArea = styled.textarea`
  border: 1px solid #e4e6ea;
  border-radius: 6px;
  resize: none;
  height: 200px;
  margin-bottom: 20px;

  &:focus {
    outline: none;
  }
`;

export default function StyledTextarea(props: StyledTextareaProps) {
  return (
    <div>
      <ProductAddLabel>
        {props.name}
        <div>
          <TextArea placeholder={props.description} />
        </div>
      </ProductAddLabel>
    </div>
  );
}
