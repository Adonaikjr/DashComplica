import { useEffect, useState } from 'react'
import { ContainerSidebar, LinkNavigate } from './styled'
import { api } from '../../service'

export function Sidebar() {
  const [data, setData] = useState([])
  const [selectedItem, setSelectedItem] = useState('')

  function handleClick(item: string) {
    console.log(item)
    setSelectedItem(item)
  }

  useEffect(() => {
    async function handleImage() {
      try {
        const response = await api.get(`/users/avatar`)
        const result = response.data.map((item: any) => {
          return item.Image
        })
        return setData(result[0])
      } catch (error) {
        console.log(error)
      }
    }
    handleImage()
  }, [])

  return (
    <ContainerSidebar>
      <div>
        <img src={`http://localhost:3333/files/${data}`} alt="batata" />
      </div>
      <nav>
        <ul>
          <LinkNavigate
            to="/"
            onClick={() => handleClick('Dashboard')}
            active={selectedItem === 'Dashboard'}
          >
            Dashboard
          </LinkNavigate>

          <LinkNavigate
            to="/entrada"
            active={selectedItem === 'Entradas'}
            onClick={() => handleClick('Entradas')}
          >
            Entrada
          </LinkNavigate>

          <LinkNavigate
            to="/saida"
            active={selectedItem === 'Saída'}
            onClick={() => handleClick('Saída')}
          >
            Saída
          </LinkNavigate>
          {/* <LinkNavigate
            active={selectedItem === 'Fornecedores'}
            onClick={() => handleClick('Fornecedores')}
          >
            Fornecedores
          </LinkNavigate>
          <LinkNavigate
            active={selectedItem === 'Clientes'}
            onClick={() => handleClick('Clientes')}
          >
            Clientes
          </LinkNavigate> */}
        </ul>
      </nav>
    </ContainerSidebar>
  )
}
