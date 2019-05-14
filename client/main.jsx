import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return (
      <header>
        <h1>Typo</h1>
      </header>
    );
  }
}

render(<App />, document.getElementById('app'));