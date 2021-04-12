import React from 'react';
import s from './components/Feedback.module.scss';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    let name = e.target.name;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.bad + this.state.neutral;
  countPositiveFeedbackPercentage = () =>
    (this.state.good /
      (this.state.good + this.state.bad + this.state.neutral)) *
    100;

  render() {
    return (
      <div className={s.statistics}>
        <h2 className="title">Please leave feedback</h2>
        <FeedbackOptions onLeaveFeedback={this.handleIncrement} />
        <h3 className="title">Statistics</h3>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default App;