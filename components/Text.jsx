import React from 'react';
import { render } from 'react-dom';

const Text = props => {
  const editorsCut = props.editorsCut;
  return (
    <section className="editors-cut" dangerouslySetInnerHTML={{
      __html: editorsCut,
    }}>
    </section>
  )
}

export default Text;