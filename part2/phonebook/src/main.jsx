
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(<App />)
import axios from 'axios'

console.log(1)
const promise = axios.get('http://localhost:3001/persons')
console.log(promise)
promise.then (response =>{
  const data = response.data
  console.log(data)
})

// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)

console.log(2)