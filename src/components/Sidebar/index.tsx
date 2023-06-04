import { useEffect, useState } from 'react'
import { ContainerMobile, ContainerSidebar, LinkNavigate } from './styled'
import { api } from '../../service'
import { Spin as Hamburger } from 'hamburger-react'

export function Sidebar() {
  const [data, setData] = useState([])
  const [selectedItem, setSelectedItem] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  function handleClick(item: string) {
    // console.log(item)
    setSelectedItem(item)
  }

  useEffect(() => {
    async function handleImage() {
      try {
        const UserLocal: any = localStorage.getItem('@user')
        const user = JSON.parse(UserLocal)
        const response = await api.get(`/users/avatar`)
        const newData = response.data?.filter((item: any) => {
          return item.userId === user.id
        })
        return setData(newData[0].Image)
      } catch (error) {
        console.log(error)
      }
    }
    handleImage()
  }, [data])

  return (
    <ContainerSidebar>
      {isOpen ? null : (
        <div>
          <img src={`${api.defaults.baseURL}/files/${data}`} alt="batata" />
        </div>
      )}
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
          <LinkNavigate
            to="/config"
            active={selectedItem === 'Config'}
            onClick={() => handleClick('Config')}
          >
            Configurações
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
      {isOpen ? (
        <ContainerMobile>
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
              <LinkNavigate
                to="/config"
                active={selectedItem === 'Config'}
                onClick={() => handleClick('Config')}
              >
                Configurações
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
        </ContainerMobile>
      ) : null}
      <section>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </section>
    </ContainerSidebar>
  )
}
