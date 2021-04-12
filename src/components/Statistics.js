import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
  total === 0 ? (
    <h3 className="title">No feedback given</h3>
  ) : (
    <div>
      <span>Good {good}</span>
      <span>Neutral {neutral}</span>
      <span>Bad {bad}</span>
      <span>Total {total}</span>
      <span>Positive feedback:{positivePercentage}%</span>
    </div>
  );
export default Statistics;
