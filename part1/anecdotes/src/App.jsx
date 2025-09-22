import { useState } from 'react'

const NextButton = ({onclick}) =>{
  return <div><button onClick={onclick}>next anecdotes</button></div>
}

const VoteButton = ({onclick, vote}) =>{
  return <div>
    <p>has {vote} votes</p>
    <button onClick={onclick}>vote</button>
    </div>
 
}

const MostVotes = ({totalVotes, anecdotes}) =>{
  const maxValue = Math.max(...totalVotes)
  const maxIndex = totalVotes.indexOf(maxValue)
  if (maxValue == 0){
   return <h2>Anecdote with most votes</h2>
  }
  return <div>
    <h2>Anecdote with most votessss</h2>
    <p>{anecdotes[maxIndex]}</p>
    
  </div>
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  
  const buttonClick = () =>{
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  
  const handleVotes = ()=>{
    const copyVotes = [...votes]
    copyVotes[selected] += 1

    setVotes(copyVotes)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <NextButton onclick={buttonClick} />
      <VoteButton onclick={handleVotes} vote={votes[selected]} />
      <MostVotes totalVotes={votes} anecdotes ={anecdotes}/>
    </div>
  )
}

export default App