import React from 'react';
import { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = event => {
    switch (event.target.textContent) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={['good', 'bad', 'neutral']}
        onLeaveFeedback={handleLeaveFeedback}
      />
      <Statistics
        // state={this.state}
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positiveFeedback={
          countTotalFeedback() ? countPositiveFeedbackPercentage() : 0
        }
      />
    </Section>
  );
};
