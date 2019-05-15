import React from 'react';
import { render } from 'react-dom';

const Input = props => {
  return (
    <textarea cols={props.cols} value={props.value} onChange={props.onChange}>
    </textarea>
  )
}

export default Input;