import * as React from 'react';

interface Props {
  value: string;
  label: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          value={props.value}
          name={props.name}
          checked={props.checked}
          onChange={props.onChange}
        />
        {props.label}
      </label>
    </div>
  );
};

export default RadioButton;
