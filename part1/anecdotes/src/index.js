import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Display = ({ label, votes }) => (
  <div>
    <div>{label}</div>
    <div>Has {votes} votes</div>
  </div>
)

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  const highest = points.indexOf(Math.max(...points));

  const handleNextAnecdote = () => {
    const next = Math.round(Math.random() * (anecdotes.length - 1));
    setSelected(next);
  }

  const handlePoints = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  }

  return (
    <div>
      <div> <h1>Anecdote of the day </h1></div>
      <Display label={props.anecdotes[selected]} votes={points[selected]} />
      <div>
        <Button onClick={() => handlePoints()} text='Vote' />
        <Button onClick={() => handleNextAnecdote()} text='Next anecdote' />
      </div>
      <div> <h1>Anecdote with most votes </h1></div>
      <Display label={props.anecdotes[highest]} votes={points[highest]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)