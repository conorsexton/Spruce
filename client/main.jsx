import React, { Component } from 'react';
import { render } from 'react-dom';
import Input from '../components/Input.jsx';
import Submit from '../components/Submit.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Paste in plain text or Markdown',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/api/parse', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/markdown; charset=UTF-8',
      },
      body: this.state.value,
    })
    .then(response => console.log(response))
    .catch(error => console.error(`Error: ${error}`))
  }

  render() {
    return (
      <header>
        <h1>Typos</h1>
        <form onSubmit={this.handleSubmit}>
          <Input value={this.state.value} onChange={this.handleChange} cols="60"/>
          <Submit />
        </form>
      </header>
    );
  }
}

render(<App />, document.getElementById('app'));