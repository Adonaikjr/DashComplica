import { useContext, useEffect } from 'react'
import { ContainerSaida } from './style'
import { ContentList } from '../Entrada/style'
import { ContainerContent, ContainerHome } from '../Home/style'
import { AuthContext } from '../../hook/auth'
import { format } from 'date-fns'
import BarChart from '../../components/Grafic'
import { FcDeleteRow } from 'react-icons/all'
import { api } from '../../service'

export function Saida() {
  const { dataSaida, saidaByMonth }: any = useContext(AuthContext)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function handleDelete(item: number, description: string) {
    const YesDelete = window.confirm(
      `Deseja excluir a Entrada: ${description} permanentemente?(não será possivel reverter)`,
    )
    if (YesDelete) {
      try {
        await api.delete(`/saida/delete/${item}`)
      } catch (error) {
        console.log(error)
      }
    }
  }
  useEffect(() => {}, [handleDelete])
  return (
    <ContainerHome>
      <ContainerContent>
        <ContainerSaida>
          <section>
            <h1>Ultimas saídas</h1>
            <ContentList>
              <table>
                <tr>
                  <th>Descrição</th>
                  <th>Valor</th>
                  <th>Data</th>
                  <th>Deletar</th>
                </tr>
                {dataSaida &&
                  dataSaida?.map((item: any) => {
                    const dataFormated = format(
                      new Date(item.createdAt),
                      'dd/MM/yyyy HH:mm:ss',
                    )
                    return (
                      <>
                        <tr key={item.id}>
                          <td>{item.description}</td>
                          <td>R${item.valueDesp}</td>
                          <td>{dataFormated}</td>
                          <td>
                            <FcDeleteRow
                              onClick={() =>
                                handleDelete(item.id, item.description)
                              }
                              cursor="pointer"
                            />
                          </td>
                        </tr>
                      </>
                    )
                  })}
              </table>
            </ContentList>
            <article>
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
            </article>
          </section>
        </ContainerSaida>
      </ContainerContent>
    </ContainerHome>
  )
}
