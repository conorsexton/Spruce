import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from '../containers/Form.jsx';
import Reset from '../components/Reset.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { mode: 'input' };
    this.getResults = this.getResults.bind(this);
    this.resetMode = this.resetMode.bind(this);
  }

  getResults(results) {
    this.setState({ 
      mode: 'results', 
      results: results,
    });
  }

  resetMode() {
    this.setState({
      mode: 'input',
    })
  }

  render() {
    if (this.state.mode === 'input') {
      return (
        <section>
          {this.state.mode === 'input' && <Form handleResults={this.getResults} />}
        </section>
      )
    }
    return (
      <section>
        <div dangerouslySetInnerHTML={{__html: this.state.results.editorsCut}}>
        </div>
      <Reset handleClick={this.resetMode} />
      </section>
    );
  }
}

render(<App />, document.getElementById('app'));