import React from 'react';
import { render } from 'react-dom';



const Input = props => {
  return (
    <textarea cols={props.cols} rows={props.rows} placeholder='Paste in Markdown' onChange={props.onChange}>
    </textarea>
  )
}

export default Input;