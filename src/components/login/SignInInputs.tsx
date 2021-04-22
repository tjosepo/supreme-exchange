import { InputBase } from '@material-ui/core';
import './style/SignInInputs.css';
interface Props {
  children: string;
  type: string;
  autocomplete?: string;
  required: boolean;
}

export default function InputBox({children, type, autocomplete, required}: Props) {
  return (
    <>
      <InputBase
        className="inputfield"
        placeholder={children}
        type={type}
        autoComplete={autocomplete}
        name={autocomplete}
        required={required}
      />  
    </>
  );
}