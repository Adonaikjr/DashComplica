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
  const [user, setUser] = useState<Boolean>(false)

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
      // console.log(result)
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
      // console.log(result)
      return setDataEntrada(result.reverse())
    } catch (error) {
      console.log(error)
    }
  }
  // ==> LOGICA SOBRE SAIDAS <==
  const [dataSaida, setDataSaida] = useState([])

  async function getSaida() {
    try {
      const response = await api.get('/desp')
      const user = JSON.parse(UserLocal)
      const result = response.data?.filter((item: any) => {
        return item.userId === user.id
      })
      // console.log(result)
      return setDataSaida(result.reverse())
    } catch (error) {
      console.log(error)
    }
  }

  console.log(dataSaida)
  // 1. Extrair o mês de cada objeto da lista
  const monthsSaida = dataSaida?.map(
    (obj: any) => new Date(obj.createdAt).getMonth() + 1,
  )

  // 2. Agrupar os objetos por mês
  const groupedByMonthSaida = monthsSaida.reduce(
    (acc: any, month: any, index: any) => {
      if (!acc[month]) {
        acc[month] = []
      }
      acc[month].push(dataSaida[index])
      return acc
    },
    {},
  )

  // 3. Calcular a soma dos valores para cada mês
  const saidaByMonth: Record<string, number> = Object.keys(
    groupedByMonthSaida,
  ).reduce((acc: any, month) => {
    const values = groupedByMonthSaida[month].map((obj: any) => obj.valueDesp)
    const total = values.reduce((sum: any, value: any) => sum + value, 0)
    acc[month] = total
    return acc
  }, {})
  console.log(saidaByMonth)

  // ==> LOGICAS SOBRE ENTRADAS <==
  const [isModal, setIsModal] = useState<Boolean>(false)
  function handleNewEntrada() {
    if (isModal === false) {
      setIsModal(true)
    } else {
      setIsModal(false)
    }
  }

  // 1. Extrair o mês de cada objeto da lista
  const months = dataEntrada?.map(
    (obj: any) => new Date(obj.createdAt).getMonth() + 1,
  )

  // 2. Agrupar os objetos por mês
  const groupedByMonth = months.reduce((acc: any, month: any, index: any) => {
    if (!acc[month]) {
      acc[month] = []
    }
    acc[month].push(dataEntrada[index])
    return acc
  }, {})

  // 3. Calcular a soma dos valores para cada mês
  const sumByMonth: Record<string, number> = Object.keys(groupedByMonth).reduce(
    (acc: any, month) => {
      const values = groupedByMonth[month].map((obj: any) => obj.value)
      const total = values.reduce((sum: any, value: any) => sum + value, 0)
      acc[month] = total
      return acc
    },
    {},
  )

  useEffect(() => {
    const token = localStorage.getItem('@token')
    const user = localStorage.getItem('@user')
    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      if (data) {
        setUser(true)
      }
      getEntrada()
      getSaida()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isModal])

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
        handleNewEntrada,
        isModal,
        sumByMonth,
        saidaByMonth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
