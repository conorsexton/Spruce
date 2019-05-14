import React, { Component } from 'react';
import { render } from 'react-dom';
import Input from '../components/Input.jsx';
import Submit from '../components/Submit.jsx';

class App extends Component {
  render() {
    return (
      <header>
        <h1>Typo</h1>
        <form>
        <Input placeholder="Paste in plain text or Markdown" cols="60"/>
        <Submit />
        </form>
      </header>
    );
  }
}

render(<App />, document.getElementById('app'));