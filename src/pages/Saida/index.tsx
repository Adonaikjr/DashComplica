import { useContext } from 'react'
import { ContainerEntrada, ContentList } from './style'
import {
  ContainerContent,
  ContainerHome,
  ContainerSection,
} from '../Home/style'
import { AuthContext } from '../../hook/auth'
import { format } from 'date-fns'

export function Saida() {
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
