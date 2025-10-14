
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import axios from 'axios'

createRoot(document.getElementById('root')).render(<App />)
// const baseUrl = 'http://localhost:3001/persons'

// const getAll = () => {
//   const promise = axios.get(baseUrl)
//   promise.then(respone =>{console.log(respone.data)} )
// }

// getAll()




