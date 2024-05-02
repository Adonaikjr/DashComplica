import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://191.252.113.234:3333',
})

// export const api = axios.create({
//   baseURL: 'http://localhost:3333',
// })
