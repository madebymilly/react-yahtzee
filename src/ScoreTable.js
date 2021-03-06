import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';


class ScoreTable extends Component {

  getTotalScore = () => {
    let totalScore = 0;
    for (let key in this.props.scores) {
      if (this.props.scores[key]) {
        totalScore += this.props.scores[key];
      }
    }
    return totalScore;
  }

  render() {
    const { scores, doScore, rolling } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Ones" score={scores.ones} doScore={evt => doScore("ones", ones.evalRoll)} description={ones.getDescription()} rolling={rolling}/>
              <RuleRow name="Twos" score={scores.twos} doScore={evt => doScore("twos", twos.evalRoll)} description={twos.getDescription()} rolling={rolling}/>
              <RuleRow name="Threes" score={scores.threes} doScore={evt => doScore("threes", threes.evalRoll)} description={threes.getDescription()} rolling={rolling}/>
              <RuleRow name="Fours" score={scores.fours} doScore={evt => doScore("fours", fours.evalRoll)} description={fours.getDescription()} rolling={rolling}/>
              <RuleRow name="Fives" score={scores.fives} doScore={evt => doScore("fives", fives.evalRoll)} description={fives.getDescription()} rolling={rolling}/>
              <RuleRow name="Sixes" score={scores.sixes} doScore={evt => doScore("sixes", sixes.evalRoll)} description={sixes.getDescription()} rolling={rolling}/>
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Three of Kind" score={scores.threeOfKind} doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} description={threeOfKind.getDescription()} rolling={rolling}/>
              <RuleRow name="Four of Kind" score={scores.fourOfKind} doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} description={fourOfKind.getDescription()} rolling={rolling}/>
              <RuleRow name="Full House" score={scores.fullHouse} doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} description={fullHouse.getDescription()} rolling={rolling}/>
              <RuleRow name="Small Straight" score={scores.smallStraight} doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} description={smallStraight.getDescription()} rolling={rolling}/>
              <RuleRow name="Large Straight" score={scores.largeStraight} doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} description={largeStraight.getDescription()} rolling={rolling}/>
              <RuleRow name="Yahtzee" score={scores.yahtzee} doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} description={yahtzee.getDescription()} rolling={rolling}/>
              <RuleRow name="Chance" score={scores.chance} doScore={evt => doScore("chance", chance.evalRoll)} description={chance.getDescription()} rolling={rolling}/>
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-total">
          <h2>Total</h2>
          <div className="ScoreTable-section-total-score">{this.getTotalScore()}</div>
        </section>
      </div>
    )
  }
}

export default ScoreTable;