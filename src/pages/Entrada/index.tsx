/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react'
import { ContainerEntrada, ContentList } from './style'
import { ContainerContent, ContainerHome } from '../Home/style'
import { AuthContext } from '../../hook/auth'
import { format } from 'date-fns'
import BarChart from '../../components/Grafic'
import { FcDeleteRow } from 'react-icons/all'
import { api } from '../../service'
export function Entrada() {
  const { dataEntrada, sumByMonth }: any = useContext(AuthContext)

  async function handleDelete(item: number, description: string) {
    const YesDelete = window.confirm(
      `Deseja excluir a Entrada: ${description} permanentemente?(não será possivel reverter)`,
    )
    if (YesDelete) {
      try {
        await api.delete(`/entrada/delete/${item}`)
      } catch (error) {
        console.log(error)
      }
    }
  }
  useEffect(() => {}, [handleDelete])
  return (
    <ContainerHome>
      <ContainerContent>
        <ContainerEntrada>
          <section>
            <h1>Últimos Lançamentos</h1>
            <ContentList>
              <table>
                <tr>
                  <th>Descrição</th>
                  <th>Valor</th>
                  <th>Data</th>
                  <th>Deletar</th>
                </tr>
                {dataEntrada &&
                  dataEntrada?.map((item: any) => {
                    const dataFormated = format(
                      new Date(item.createdAt),
                      'dd/MM/yyyy HH:mm:ss',
                    )
                    return (
                      <>
                        <tr key={item.id}>
                          <td>{item.description}</td>
                          <td>R${item.value}</td>
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
            </article>
          </section>
        </ContainerEntrada>
      </ContainerContent>
    </ContainerHome>
  )
}
