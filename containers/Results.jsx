import React, { Component } from 'react';
import { render } from 'react-dom';
import Text from '../components/Text.jsx';
import Reset from '../components/Reset.jsx';
import Explanation from '../components/Explanation.jsx';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.results,
      currentExplanation: {
        rule: null,
        type: 'initial',
        descrip: `Click any higlight in your text to learn more about changes`,
      }
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleExplanation = this.handleExplanation.bind(this);
  }

  handleExplanation(event) {
    console.log
  }

  handleReset() {
    this.props.handleReset();
  }

  render() {
    // console.log(this.state.currentExplanation);
    return (
      <section className="results">
        <Text editorsCut={this.state.results.editorsCut} />
        <Explanation explanation={this.state.currentExplanation}/>
        <Reset handleClick={this.handleReset} />
      </section>
    );
  }
}

export default Results;
