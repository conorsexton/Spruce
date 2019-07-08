import React from 'react';

const Input = props => {
  return (
    <textarea cols={props.cols} rows={props.rows} placeholder='Paste in Markdown' onChange={props.onChange}>
    </textarea>
  )
}

export default Input;