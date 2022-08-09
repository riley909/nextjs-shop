import styled from 'styled-components';
import { StyledInputProps } from '../../interface/productAdd';

export const InputLabel = styled.label`
  font-size: 13px;
  color: #5a5e6a;
  font-weight: bold;
`;

export const TextInput = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || '2em',
}))`
  border: 1px solid #e4e6ea;
  border-radius: 6px;
  height: ${(props) => props.size};

  &:focus {
    outline: none;
  }
`;

export default function StyledInput(props: StyledInputProps) {
  return (
    <div>
      <InputLabel>
        {props.name}
        <div>
          <TextInput placeholder={props.description} size={props.size} />
        </div>
      </InputLabel>
    </div>
  );
}
