import { Component } from 'react';
export class App extends Component {
  state = {
    good: 1,
    neutral: 0,
    bad: 0
  };
   
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad; 
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
    <>
      <div>
          <p>
            Good: <span>{good}</span>
          </p>
          <p>
            Neutral: <span>{neutral}</span>
          </p>
          <p>
            Bad: <span>{bad}</span>
          </p>
          <p>
            Total: <span>{total}</span>
          </p>
      </div>
    </>
  );
};
}