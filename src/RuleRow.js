import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {

  handleClick = () => {
    if (!this.props.score && !this.props.rolling) {
      this.props.doScore();
    }
  }

  render() {
    const { score, name, description } = this.props;

    const ruleRowClass = (score) ? 'RuleRow-disabled' : 'RuleRow-active';
    const ruleRowText = (score) ? score : description;
    return (
      <tr className={`RuleRow ${ruleRowClass}`} onClick={this.handleClick}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{ruleRowText}</td>
      </tr>
    )
  }
}

export default RuleRow;