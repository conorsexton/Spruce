import React from 'react';
import { render } from 'react-dom';

const Explanation = props => {
  const { rule, type, descrip } = props.explanation;
  return (
    <aside className="explanation-modal">
      <h3>{rule ? rule.toUpperCase() : 'See What’s Changed'}</h3>
      <p>{descrip}</p>
    </aside>
  )
}

export default Explanation;