import React from 'react';

const Submit = props => {
  return (
    <button className={props.isEnabled ? '' : 'disabled'}>Run →</button>
  )
}

export default Submit;