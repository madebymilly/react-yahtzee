import React, { Component } from "react";
import "./Die.css";

class Die extends Component {

  static defaultProps = {
    dieFaces: ['one', 'two', 'three', 'four', 'five', 'six'],
    val: 1
  }

  constructor(props) {
    super(props)
  
    this.state = {
       
    }

    this.handleClick = this.handleClick.bind(this);
    
  }
  
  handleClick() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const lockedClass = this.props.locked ? 'Die-locked' : '';
    const rollingClass = (this.props.rolling) ? 'Die-rolling' : '';
    return (
      <i
        className={`Die fas fa-4x fa-dice-${this.props.dieFaces[this.props.val-1]} ${lockedClass} ${rollingClass}`}
        onClick={this.handleClick}
      >
      </i>
    );
  }
}

export default Die;
