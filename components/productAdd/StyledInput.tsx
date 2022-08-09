import styled from 'styled-components';
import { StyledInputProps } from '../../interface/productAdd';
import { ProductAddLabel } from '../../styles/productAdd';

export const TextInput = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || '2em',
}))`
  border: 1px solid #e4e6ea;
  border-radius: 6px;
  height: ${(props) => props.size};
  margin-bottom: 20px;

  &:focus {
    outline: none;
  }
`;

export default function StyledInput(props: StyledInputProps) {
  return (
    <div>
      <ProductAddLabel>
        {props.name}
        <div>
          <TextInput placeholder={props.description} size={props.size} />
        </div>
      </ProductAddLabel>
    </div>
  );
}
