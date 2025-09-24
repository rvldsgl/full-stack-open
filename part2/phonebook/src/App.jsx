import { useState } from 'react'

const ListNumber = ({names}) =>{
  return (<div>
      <ul>
        {names.map(name => <li>{name.name} {name.number}</li>)}
      </ul>
    </div>)
}

const Filter = (props) =>{
  
  return(  
    <div>
        filterShown: <input value={props.filteredName} onChange={props.onChange} />
    </div>)
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newNameFiltered, setNewNameFiltered] = useState('')
  const [filteredName, setFilteredName] = useState(persons)



  
  const addNewName = (event)=>{
    const nameExists = persons.some(person => person.name.toLowerCase() === newName.toLowerCase())
    console.log(nameExists)
    
    event.preventDefault()
    
    const tempName = {
      name: newName,
      number: newNumber
    }
    
    const checkName = nameExists ? alert(`${newName} is already added to the phonebook`) : setPersons(persons.concat(tempName)) 
    
    setNewName('')
    setNewNumber('')
    
    
  }

  const handleNameChange = (event)=>{
    setNewName(event.target.value)
  }

  const handleNumberChange = (event)=>{
    setNewNumber(event.target.value)
  }

  const handlefilter = (event)=>{
    setNewNameFiltered(event.target.value)
    const filtered = persons.filter(person =>
      person.name.toLowerCase().includes(search.toLowerCase())
    )

    if (filtered.length > 0 ){
      setFilteredName(filtered)
    }


  }

  return (
    <div>
      <div>debug Name: {newName}</div>
      <div>debug filteredName: {newNameFiltered}</div>
      <div>debug Number: {newNumber}</div>
      <Filter filteredName={newNameFiltered} onChange={handlefilter} />
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          phoneNumber: <input value={newNumber} onChange={handleNumberChange} />
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