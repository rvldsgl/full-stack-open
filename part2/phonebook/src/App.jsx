import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import RenderPerson from './components/RenderPerson'




const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newNameFiltered, setNewNameFiltered] = useState('')
  const [filteredName, setFilteredName] = useState(persons)

  useEffect(() =>{
    axios.get('http://localhost:3001/persons').then(
      (response) =>{
        setPersons(response.data)
      }
    )
  },[])

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
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(newNameFiltered.toLowerCase())
  )

  return (
    <div>
      <Filter filteredName={newNameFiltered} onChange={handlefilter} />
      <h2>Phonebook</h2>
      <PersonForm addNewName = {addNewName} newName = {newName} handleNameChange = {handleNameChange} newNumber = {newNumber} handleNumberChange = {handleNumberChange} />

      <h2>Numbers</h2>
      <RenderPerson names={personsToShow} />
    </div>
  )
}

export default App