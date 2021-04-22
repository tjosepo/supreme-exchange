import { InputBase } from '@material-ui/core';
import './style/SignInInputs.css';

import React from 'react';

interface Props {
  children: string;
  type: string;
}

export default function InputBox({children, type}: Props) {
  return (
    <>
      <InputBase
        className="inputfield"
        placeholder={children}
        type={type}
      />  
    </>
  );
}