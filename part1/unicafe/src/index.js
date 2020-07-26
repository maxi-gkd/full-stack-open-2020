import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';


const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  );

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = good * 1 + neutral * 0 + bad * -1;
  const positive = total !== 0 ? (good * 100 / total) : 0;

  if (total > 0) {
    return (
      <>
        <div>
          <table>
            <tbody>
              <Statistic text='Good' value={good} />
              <Statistic text='Neutral' value={neutral} />
              <Statistic text='Bad' value={bad} />
              <Statistic text='All' value={total} />
              <Statistic text='Average' value={average} />
              <Statistic text='Positive' value={positive + '%'} />
            </tbody>
          </table>
        </div>
      </>)
  } else {
    return (
      <p>No feedback given</p>
    )
  }

}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1><strong> Give feedback </strong></h1>

      <div>
        <Button onClick={() => setGood(good + 1)} text='Good' />
        <Button onClick={() => setNeutral(neutral + 1)} text='Neutral' />
        <Button onClick={() => setBad(bad + 1)} text='Bad' />
      </div>

      <h1><strong> Statistics </strong></h1>
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)