import React from 'react';
// import Prism from "prismjs";
// import '../client/prism.css';
// import { render } from 'react-dom';

const Code = props => {
  const content = props.content;
  console.log(props);
  return (
    <pre>
      <code className="language-html">
        {`${content}`}
      </code>
      <button onClick={props.handleClick}>{!props.copied ? 'Copy HTML' : 'Copied!'}</button>
    </pre>
  )
}

export default Code;