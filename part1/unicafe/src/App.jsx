import { useState } from 'react'

const Button = ({onClick, text}) => {
  return <button onClick={onClick}>{text}</button>
   
} 


const Statistic = ({ totalGood, totalNeutral, totalBad }) => {
  const total = totalGood + totalNeutral + totalBad
  if (total === 0) {
    return <p>No feedback given</p>
  }

  const average = (totalGood - totalBad) / total
  const positive = (totalGood / total) * 100

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr>
            <td>Good</td>
            <td>{totalGood}</td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>{totalNeutral}</td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>{totalBad}</td>
          </tr>
          <tr>
            <td>All</td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>{average.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Positive</td>
            <td>{positive.toFixed(1)} %</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}




const App = () => {
  
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
  }
  const neutralClick = () => {
    setNeutral(neutral + 1)
  }
  const badClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>Give feedback</h2>
      <Button onClick={goodClick} text="good" />
      <Button onClick={neutralClick} text="neutral" />
      <Button onClick={badClick} text="bad" />
      
      <Statistic totalGood={good} totalNeutral = {neutral} totalBad = {bad} />
    </div>
  )
}

export default App