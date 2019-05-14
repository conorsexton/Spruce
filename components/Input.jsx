import React from 'react';
import { render } from 'react-dom';

const Input = props => {
  return (
    <textarea cols={props.cols} placeholder={props.placeholder}>
    </textarea>
  )
};

export default Input;