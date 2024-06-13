import { Component } from 'react';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
   
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad; 
  };

  handleClick = type => {
    this.setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const options = ['good', 'neutral', 'bad'];
    return (
      <>
        <div>
        {options.map(option => (
          <button key={option} onClick={() => this.handleClick(option)}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
     ))}    
        </div> 

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