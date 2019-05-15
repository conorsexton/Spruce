import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from '../containers/Form.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { mode: 'input' };
    this.getResults = this.getResults.bind(this);
  }

  getResults(html) {
    this.setState({ 
      mode: 'results', 
      results: html,
    });
  }

  render() {
    return (
      <section>
        {this.state.mode === 'input' && <Form handleResults={this.getResults} />}
        {this.state.mode === 'results' && this.state.results}
      </section>
    );
  }
}

render(<App />, document.getElementById('app'));