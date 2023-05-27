import { createContext, ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../service'

interface PropsContentContext {
  children: ReactNode
}
interface PropsData {
  id: number
  description: string
  userId: number
  value: number
  createdAt: number
}
export const AuthContext = createContext({})

export function AuthProvider({ children }: PropsContentContext) {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [data, setData] = useState([])
  const [user, setUser] = useState(false)

  const handleBackNaviigate = () => {
    navigate(-1)
  }

  async function handleSignUp(e: any) {
    e.preventDefault()
    if (!email || !password) {
      return alert('Preencha os campos! ⚠️')
    }
    try {
      const response = await api.post('/users/login', { email, password })
      const result = response.data
      if (!result) {
        return alert('Os dados não confere ⚠️')
      }
      api.defaults.headers.common.Authorization = `Bearer ${result.token}`
      localStorage.setItem('@token', result.token)
      localStorage.setItem('@user', JSON.stringify(result.user))
      setData(result)
      console.log(result)
      setUser(true)
      return navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const [dataEntrada, setDataEntrada] = useState<PropsData[]>([])
  const UserLocal: any = localStorage.getItem('@user')

  async function getEntrada() {
    try {
      const user = JSON.parse(UserLocal)
      const response = await api.get('/entrada')
      const result = response.data?.filter((item: any) => {
        return item.userId === user.id
      })
      console.log(result)
      return setDataEntrada(result.reverse())
    } catch (error) {
      console.log(error)
    }
  }
  const [dataSaida, setDataSaida] = useState([])

  async function getSaida() {
    try {
      const response = await api.get('/desp')
      const user = JSON.parse(UserLocal)
      const result = response.data?.filter((item: any) => {
        return item.userId === user.id
      })
      console.log(result)
      return setDataSaida(result.reverse())
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@token')
    const user = localStorage.getItem('@user')
    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      if (data) {
        setUser(true)
      }
    }
    getEntrada()
    getSaida()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <AuthContext.Provider
      value={{
        handleBackNaviigate,
        handleSignUp,
        setPassword,
        setEmail,
        user,
        dataEntrada,
        dataSaida,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
