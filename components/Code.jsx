import React from 'react';

const Code = props => {
  const content = props.content;
  return (
    <section className="code">
    <h4>HTML</h4>
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