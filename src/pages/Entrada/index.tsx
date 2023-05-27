import { useContext } from 'react'
import { ContainerEntrada, ContentList } from './style'
import {
  ContainerContent,
  ContainerHome,
  ContainerSection,
} from '../Home/style'
import { AuthContext } from '../../hook/auth'
import { format } from 'date-fns'
// @ts-ignore

import Title from 'react-vanilla-tilt'
import BarChart from '../../components/Grafic'

export function Entrada() {
  const { dataEntrada }: any = useContext(AuthContext)

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
            {dataEntrada &&
              dataEntrada?.map((item: any) => {
                const dataFormated = format(
                  new Date(item.createdAt),
                  'dd/MM/yyyy HH:mm:ss',
                )
                // const dataObj = new Date(item.createdAt)
                // const mes = dataObj.getMonth() + 1

                // const dataAtual = new Date()
                // const mesAtual = dataAtual.getMonth() + 1
                return (
                  <ul key={item.id}>
                    <li>{item.description}</li>
                    <li>R${item.value}</li>
                    <li>{dataFormated}</li>
                  </ul>
                )
              })}
          </ContentList>
          <Title
            style={{
              height: '20rem',
              display: 'flex',
              justifyContent: 'center',
              width: '50%',
            }}
          >
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
        </ContainerEntrada>
      </ContainerContent>
    </ContainerHome>
  )
}
