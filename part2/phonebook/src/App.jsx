import { useState } from 'react'

const ListNumber = ({names}) =>{
  return (<div>
      <ul>
        {names.map(name => <li>{name.name}</li>)}
      </ul>
    </div>)
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  
  const addNewName = (event)=>{
    const nameExists = persons.some(person => person.name.toLowerCase() === newName.toLowerCase())
    console.log(nameExists)
    
    event.preventDefault()
    
    const tempName = {
      name: newName
    }
    
    const checkName = nameExists ? alert(`${newName} is already added to the phonebook`) : setPersons(persons.concat(tempName)) 
    
    setNewName('')
    
    
  }

  const handleNameChange = ()=>{
    setNewName(event.target.value)
  }

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ListNumber names={persons} />
    </div>
  )
}

export default App