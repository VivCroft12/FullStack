import React, { useState } from 'react'

const Button = ({handle, text}) => {
  return(
  <>
  <button onClick = {handle}>
    {text}
  </button>
  </>
  )
}

const Display = (props) => {
  return(
  <>
    {props.text} {props.value}
  </>
  )
}

const StatisticLine = ({text, value}) => {
  return(
    <>
      <td>
        {text}
      </td>
      <td>
        {value}
      </td>
      <br/>
    </>
  )
}
const Statistics = ({good, neutral, bad}) => {
  if(good || neutral || bad) {
    return(
      <>
        <table>
         <tr>
           <StatisticLine text="good" value ={good} />
          </tr>
          <tr>
            <StatisticLine text="neutral" value ={neutral} />
          </tr>
          <tr>
            <StatisticLine text="bad" value ={bad} />
          </tr>
          <tr>
            <StatisticLine text = "average" value = {(good - bad)/(good+bad+neutral)} />
          </tr>
          <tr>
            <StatisticLine text = "positive" value = {(good/(good+bad+neutral)*100)} />
          </tr>
        </table>
      </>
    )
  }
  else {
    return (
      <>
        No feedback given yet please select the buttons!
      </>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    
    <div>
      <div>
      <h1>Select your feedback!</h1>
        <br/>
        <Button  handle = {() => setGood(good + 1)} text = "Good" />
        <Button  handle = {() => setNeutral(neutral + 1)} text = "Neutral" />
        <Button  handle = {() => setBad(bad + 1)} text = "Bad" />
      </div>
      <div>
          <h1>Statistics table:</h1>
        <Statistics good = {good} neutral = {neutral} bad = {bad}/>
      </div>
    </div>
  )
}

export default App;
