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
import { toast } from 'react-toastify'

export function Home() {
  const [valueEntrada, setValueEntrada] = useState()
  const [description, setDescription] = useState('')
  const [valueSaida, setValueSaida] = useState()
  const [descriptionSaida, setDescriptionSaida] = useState('')
  const navigate = useNavigate()
  const {
    dataEntrada,
    dataSaida,
    handleNewEntrada,
    isModal,
    sumByMonth,
    saidaByMonth,
    handleNewSaida,
    isModalSaida,
  }: any = useContext(AuthContext)

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

  const UserLocal: any = localStorage.getItem('@user')
  const user = JSON.parse(UserLocal)
  async function handleSubmitEntrada(e: any) {
    e.preventDefault()
    try {
      await api.post('/entrada', {
        value: Number(valueEntrada),
        description,
        userId: user.id,
      })
      toast.success('Entrada cadastrada com sucesso')
      handleNewEntrada()
      navigate('/entrada')
    } catch (error) {
      console.log(error)
    }
  }
  async function handleSubmitSaida(e: any) {
    e.preventDefault()
    try {
      await api.post('/desp', {
        valueDesp: Number(valueSaida),
        description: descriptionSaida,
        userId: user.id,
      })
      toast.success('Saida cadastrada com sucesso')
      handleNewSaida()
      navigate('/saida')
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
                <IoCloseSharp
                  size={24}
                  onClick={handleNewEntrada}
                  cursor="pointer"
                />
              </div>
              <label>
                <Input
                  type="number"
                  placeholder="Valor da Entrada"
                  onChange={(e: any) => setValueEntrada(e.target.value)}
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

      {isModalSaida ? (
        <ContainerModal>
          <form>
            <fieldset>
              <div>
                <h3>Novo lançamento de Saida</h3>
                <IoCloseSharp
                  size={24}
                  onClick={handleNewSaida}
                  cursor="pointer"
                />
              </div>
              <label>
                <Input
                  type="number"
                  placeholder="Valor da Saida"
                  onChange={(e: any) => setValueSaida(e.target.value)}
                />
              </label>
              <label>
                <Input
                  placeholder="Descrição da Saida"
                  onChange={(e) => setDescriptionSaida(e.target.value)}
                />
              </label>
              <Button title="Criar" onClick={handleSubmitSaida} />
            </fieldset>
          </form>
        </ContainerModal>
      ) : null}
      <ContainerContent>
        <ContainerSection>
          <Button title="+ Entrada" onClick={handleNewEntrada} />
          <Button title="+ Saida" onClick={handleNewSaida} />
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
              jan={sumByMonth[1]}
              fev={sumByMonth[2]}
              mar={sumByMonth[3]}
              abr={sumByMonth[4]}
              mai={sumByMonth[5]}
              jun={sumByMonth[6]}
              jul={sumByMonth[7]}
              ago={sumByMonth[8]}
              set={sumByMonth[9]}
              out={sumByMonth[10]}
              nov={sumByMonth[11]}
              dez={sumByMonth[12]}
            />
          </Title>
          <Title style={{}}>
            <BarChart
              title="Saídas"
              backgroundColor="#FF6347	"
              jan={saidaByMonth[1]}
              fev={saidaByMonth[2]}
              mar={saidaByMonth[3]}
              abr={saidaByMonth[4]}
              mai={saidaByMonth[5]}
              jun={saidaByMonth[6]}
              jul={saidaByMonth[7]}
              ago={saidaByMonth[8]}
              set={saidaByMonth[9]}
              out={saidaByMonth[10]}
              nov={saidaByMonth[11]}
              dez={saidaByMonth[12]}
            />
          </Title>
        </ContainerGrafic>
        <Footer />
      </ContainerContent>
    </ContainerHome>
  )
}
