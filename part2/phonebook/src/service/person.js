import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

// Ambil semua data
const getAll = () => {
  return axios.get(baseUrl).then(response => response.data)
}

// Tambah data baru
const create = (newPerson) => {
  return axios.post(baseUrl, newPerson).then(response => response.data)
}

// Update data existing
const update = (id, newPerson) => {
  return axios.put(`${baseUrl}/${id}`, newPerson).then(response => response.data)
}

const remove = (id) => axios.delete(`${baseUrl}/${id}`)


export default { getAll, create, update, remove}
