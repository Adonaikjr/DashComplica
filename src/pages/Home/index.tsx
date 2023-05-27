import { useContext, useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import { Sidebar } from '../../components/Sidebar'
import {
  ContainerHome,
  ContainerSection,
  ContainerContent,
  ContainerArticle,
  ContainerGrafic,
} from './style'
import { FcSettings } from 'react-icons/all'
import { AuthContext } from '../../hook/auth'
import Title from 'react-vanilla-tilt'
import { Link, useNavigate } from 'react-router-dom'
import BarChart from '../../components/Grafic'
import { Button } from '../../components/Button'
interface PropsData {
  id: number
  description: string
  userId: number
  value: number
  createdAt: number
}
export function Home() {
  const navigate = useNavigate()
  const { dataEntrada, dataSaida }: any = useContext(AuthContext)

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

  function handleLogout() {
    localStorage.removeItem('@token')
    localStorage.removeItem('@user')
    location.reload()
    navigate('/')
  }

  console.log(EntradasTotal)

  return (
    <ContainerHome>
      <ContainerContent>
        <ContainerSection>
          <label>
            search
            <Input placeholder="Pesquisar" />
          </label>

          <Button title="Sair" onClick={handleLogout} />
          <FcSettings size={40} />
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
      </ContainerContent>
    </ContainerHome>
  )
}
