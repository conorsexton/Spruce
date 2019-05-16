import React, { Component } from 'react';
import { render } from 'react-dom';
import Text from '../components/Text.jsx';
import Reset from '../components/Reset.jsx';
import Explanation from '../components/Explanation.jsx';
import rules from '../server/typographyRules.js';
import semantics from '../server/semantics.js';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.results,
      currentExplanation: {
        rule: null,
        type: 'initial',
        original: null,
        descrip: `Click any higlight in your text to learn more about changes`,
      }
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleExplanation = this.handleExplanation.bind(this);
  }

  handleExplanation(event) {
    let { target } = event;
    if (target.parentElement.tagName === 'SPAN') target = target.parentElement; // Handle clicks on inner HTML
    const { dataset } = target;
    const ruleset = target.className === 'typography' ? rules : semantics;
    this.setState({
      currentExplanation: {
        rule: ruleset[dataset.rule].name,
        type: target.className,
        original: dataset.original,
        replacement: target.innerText,
        descrip: ruleset[dataset.rule].description,
      }
    })
  }

  handleReset() {
    this.props.handleReset();
  }

  componentDidMount() {
    document.querySelectorAll('.editors-cut span').forEach((element) => {
      element.addEventListener('click', this.handleExplanation);
    });
  }

  render() {
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
