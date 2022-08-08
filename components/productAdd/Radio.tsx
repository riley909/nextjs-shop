import { useState } from 'react';
import { RadioButtonProps } from '../../interface/productAdd';
import { RadioButton, RadioButtonText } from '../../styles/productAdd';

export default function Radio(props: RadioButtonProps) {
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
