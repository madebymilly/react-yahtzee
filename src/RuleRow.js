import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {

  handleClick = () => {
    if (!this.props.score) {
      this.props.doScore();
    }
  }

  render() {
    const ruleRowClass = (this.props.score) ? 'RuleRow-disabled' : 'RuleRow-active'
    return (
      <tr className={`RuleRow ${ruleRowClass}`} onClick={this.handleClick}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;