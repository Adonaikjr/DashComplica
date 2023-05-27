import { useContext } from 'react'
import { ContainerEntrada, ContentList } from './style'
import {
  ContainerContent,
  ContainerHome,
  ContainerSection,
} from '../Home/style'
import { AuthContext } from '../../hook/auth'
import { format } from 'date-fns'
import BarChart from '../../components/Grafic'
import { Button } from '../../components/Button'

export function Entrada() {
  const { dataEntrada }: any = useContext(AuthContext)

  return (
    <ContainerHome>
      <ContainerContent>
        <ContainerEntrada>
          <ContainerSection>
            <div>
              <Button title="Nova entrada" />
            </div>
            <div>
              <h1>
                <Button title="Fechar mês" />
              </h1>
            </div>
          </ContainerSection>
          <h1>Últimos Lançamentos</h1>
          <section>
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
            <div>
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
            </div>
         </section>
        </ContainerEntrada>
      </ContainerContent>
    </ContainerHome>
  )
}
