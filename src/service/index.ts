import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://dashcomplicaapi.onrender.com',
})
