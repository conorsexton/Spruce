import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from '../containers/Form.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'Input',
    };
  }
  render() {
    return (
      <section>
        <Form />
      </section>
    );
  }
}

render(<App />, document.getElementById('app'));