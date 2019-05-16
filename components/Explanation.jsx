import React from 'react';
import { render } from 'react-dom';

const Explanation = props => {
  const { rule, type, original, replacement, descrip } = props.explanation;
  return (
    <aside className="explanation-modal">
      <h3>{rule ? rule : 'See What’s Changed'}</h3>
      <p>{descrip}</p>
      <p>You originally had something like <span className="original">{original}</span>, which was replaced by {replacement}</p>
    </aside>
  )
}

export default Explanation;