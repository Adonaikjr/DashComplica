import { useContext, useState } from 'react'
import { Button } from '../../components/Button'
import { ContainerEntrada, ContentList } from './style'
import { Input } from '../../components/Input'
import { ContainerContent, ContainerHome, ContainerSection } from '../Home/style'
import { Sidebar } from '../../components/Sidebar'
import { AuthContext } from '../../hook/auth'
import { format } from 'date-fns'
import Title from 'react-vanilla-tilt'

export function Saida() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tell, setTell] = useState('')
  const [messege, setMessege] = useState('')
  const { dataSaida }: any = useContext(AuthContext)

  return (
    <ContainerHome>
      <ContainerContent>
        <ContainerEntrada>
          <ContainerSection>
            <div>
              <h1>Nova Entrada</h1>
            </div>
            <div>
              <h1>Fechar mês xxx</h1>
            </div>
          </ContainerSection>
          <ContentList>
            {dataSaida &&
              dataSaida?.map((item: any) => {
                const dataFormated = format(
                  new Date(item.createdAt),
                  'dd/MM/yyyy HH:mm:ss',
                )
                return (
                  <ul key={item.id}>
                    <li>{item.description}</li>
                    <li>R${item.valueDesp}</li>
                    <li>{dataFormated}</li>
                  </ul>
                )
              })}
          </ContentList>
        </ContainerEntrada>
      </ContainerContent>
    </ContainerHome>
  )
}
