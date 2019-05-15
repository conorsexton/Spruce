import React from 'react';
import { render } from 'react-dom';

const Input = props => {
  return (
    <textarea cols={props.cols} rows={props.rows} placeholder='Paste in Markdown' onChange={props.onChange} style={{
      border: `none`,
      borderRadius: `8px`,
      boxShadow: `0 4px 6px -3px #4e342e38`,
    }}>
    </textarea>
  )
}

export default Input;