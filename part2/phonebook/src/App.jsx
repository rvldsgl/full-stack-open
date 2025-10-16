import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './service/person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import RenderPerson from './components/RenderPerson'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={message.type === 'error' ? 'error' : 'success'}>
      {message.text}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newNameFiltered, setNewNameFiltered] = useState('')
  const [filteredName, setFilteredName] = useState(persons)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() =>{
    personService.getAll()
      .then(response => setPersons(response))
  },[])

  const addNewName = (event) => {
    event.preventDefault()

    const nameExists = persons.some(
      person => person.name.toLowerCase() === newName.toLowerCase()
    )

    const tempName = {
      name: newName,
      number: newNumber
    }

    const existingPerson = persons.find(p => p.name.toLowerCase() === newName.toLowerCase())

    if (nameExists) {
      if (window.confirm(`Replace ${newName}'s number with the new one?`)) {
        const changedPerson = { ...existingPerson, number: newNumber }

        personService
          .update(existingPerson.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== existingPerson.id ? p : returnedPerson))
            setNewName('')
            setNewNumber('')
            setErrorMessage({
              text: `Updated ${returnedPerson.name}'s number`,
              type: 'success'
            })
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
          .catch(error => {
            setErrorMessage({
              text: `Information of ${existingPerson.name} has already been removed from server`,
              type: 'error'
            })
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setPersons(persons.filter(p => p.id !== existingPerson.id))
          })
      }
    } 
    else {
      personService
        .create(tempName)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setErrorMessage({
            text: `Added ${returnedPerson.name}`,
            type: 'success'
          })
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
        .catch(error => {
          setErrorMessage({
            text: 'Failed to add the person',
            type: 'error'
          })
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handlefilter = (event) => {
    setNewNameFiltered(event.target.value)
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(newNameFiltered.toLowerCase())
  )

  const deleteImportance = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
          setErrorMessage({
            text: `Deleted ${person.name}`,
            type: 'success'
          })
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
        .catch(error => {
          setErrorMessage({
            text: `Information of ${person.name} has already been removed from server`,
            type: 'error'
          })
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }

  return (
    <div>
      <Notification message={errorMessage} />
      <Filter filteredName={newNameFiltered} onChange={handlefilter} />
      <h2>Phonebook</h2>
      <PersonForm 
        addNewName={addNewName} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange} 
      />
      <h2>Numbers</h2>
      <RenderPerson names={personsToShow} deleteImportance={deleteImportance} />
    </div>
  )
}
export default App