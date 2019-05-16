import React, { Component } from 'react';
import { render } from 'react-dom';
import Input from '../components/Input.jsx';
import Submit from '../components/Submit.jsx';

// onSubmit={this.handleSubmit} value='Paste in Markdown' onChange={this.handleChange} cols="60"

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Paste in Markdown',
      isEnabled: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.value && event.target.value !== 'Paste in Markdown') {
      this.setState({ value: event.target.value, isEnabled: true });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.isEnabled) alert('This is a pretty boring tool without any text—write or paste in Markdown to continue.');
    else fetch('/api/parse', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/markdown; charset=UTF-8',
      },
      body: this.state.value,
    })
      .then(response => response.json())
      .then(response => this.props.handleResults(response))
      .catch(error => console.error(`Error: ${error}`));
      // 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input cols={70} rows={20} onChange={this.handleChange}/>
        <Submit isEnabled={this.state.isEnabled}/>
      </form>
    );
  }
}

export default Form;
