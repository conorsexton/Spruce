import React from 'react';
// import Prism from "prismjs";
// import '../client/prism.css';
// import { render } from 'react-dom';

const Code = props => {
  const content = props.content;
  console.log(props);
  return (
    <section className="code">
    <h4>The Code</h4>
    <pre>
      <code className="language-html">
        {`${content}`}
      </code>
    </pre>
    <button className={props.copied ? 'visited' : ''} onClick={props.handleClick}>{!props.copied ? 'Copy HTML' : 'Copied!'}</button>
    </section>
  )
}

export default Code;