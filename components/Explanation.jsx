import React from 'react';
import { render } from 'react-dom';

const Explanation = props => {
  const { rule, type, original, replacement, descrip } = props.explanation;
  let className = ''
  let beforeAfter = ''
  if (type === 'html') className = 'html';
  if (type === 'typography') {
    className = 'typography';
    beforeAfter = `You originally had something like <span className="original">${original}</span>, which was replaced by ${replacement}`
  }
  return (
    <aside className="explanation-modal">
      <h3 className={className}>{rule ? rule : 'See What’s Changed'}</h3>
      <p>{descrip}</p>
      <p dangerouslySetInnerHTML={{__html: beforeAfter}}></p>
    </aside>
  )
}

export default Explanation;