import { useContext, useState } from 'react'
import { Input } from '../../components/Input'
import {
  ContainerHome,
  ContainerSection,
  ContainerContent,
  ContainerArticle,
  ContainerGrafic,
  ContainerModal,
} from './style'
import { IoCloseSharp } from 'react-icons/all'
import { AuthContext } from '../../hook/auth'
// @ts-ignore
import Title from 'react-vanilla-tilt'
import { Link, useNavigate } from 'react-router-dom'
import BarChart from '../../components/Grafic'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { api } from '../../service'

export function Home() {
  const [valueEntrada, setValueEntrada] = useState(0)
  const [description, setDescription] = useState('')
  const navigate = useNavigate()
  const { dataEntrada, dataSaida, handleNewEntrada, isModal }: any =
    useContext(AuthContext)

  let EntradasTotal: number = 0
  for (let i = 0; i < dataEntrada.length; i++) {
    EntradasTotal += dataEntrada[i].value
  }

  let SaidasTotal: number = 0
  for (let i = 0; i < dataSaida.length; i++) {
    SaidasTotal += dataSaida[i].valueDesp
  }

  function ResultLucro(a: any, b: any) {
    return a - b
  }

  async function handleSubmitEntrada(e: any) {
    e.preventDefault()
    try {
      const UserLocal: any = localStorage.getItem('@user')
      const user = JSON.parse(UserLocal)
      await api.post('/entrada', {
        value: Number(valueEntrada),
        description,
        userId: user.id,
      })
      alert('Entrada cadastrada com sucesso')
    } catch (error) {
      console.log(error)
    }
  }

  function handleLogout() {
    localStorage.removeItem('@token')
    localStorage.removeItem('@user')
    location.reload()
    navigate('/')
  }

  return (
    <ContainerHome>
      {isModal ? (
        <ContainerModal>
          <form>
            <fieldset>
              <div>
                <h3>Novo lançamento de Entrada</h3>
                <IoCloseSharp size={24} onClick={handleNewEntrada} />
              </div>
              <label>
                <Input
                  type='number' 
                  placeholder="Valor da Entrada"
                  onChange={(e) => setValueEntrada(e.target.value)}
                />
              </label>
              <label>
                <Input
                  placeholder="Descrição da Entrada"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
              <Button title="Criar" onClick={handleSubmitEntrada} />
            </fieldset>
          </form>
        </ContainerModal>
      ) : null}
      <ContainerContent>
        <ContainerSection>
          <Button title="+ Entrada" onClick={handleNewEntrada} />
          <Button title="+ Saida" onClick={handleLogout} />
          <Button title="Sair" onClick={handleLogout} />
        </ContainerSection>
        <ContainerArticle>
          <div>
            <Title style={{}}>
              <h3>Entradas</h3>
              <h1>R$ +{EntradasTotal}</h1>
              <Link to="/entrada">Ver mais</Link>
            </Title>
            <Title style={{}}>
              <h3>Saída</h3>
              <h1>R$ -{SaidasTotal}</h1>
              <Link to="/saida">Ver mais</Link>
            </Title>
          </div>
          <section>
            <Title style={{}}>
              <h3>Lucro</h3>
              <h1>R$ {ResultLucro(EntradasTotal, SaidasTotal)}</h1>
              <Link to="/saida">Ver mais</Link>
            </Title>
          </section>
        </ContainerArticle>
        <ContainerGrafic>
          <Title style={{}}>
            <BarChart
              title="Entradas"
              backgroundColor="#00FF7F"
              abr={23}
              fev={34}
              jan={4}
              jun={55}
              mai={34}
              mar={77}
            />
          </Title>
          <Title style={{}}>
            <BarChart
              title="Saídas"
              backgroundColor="#FF6347	"
              abr={23}
              fev={34}
              jan={4}
              jun={55}
              mai={34}
              mar={77}
            />
          </Title>
        </ContainerGrafic>
        <Footer />
      </ContainerContent>
    </ContainerHome>
  )
}
