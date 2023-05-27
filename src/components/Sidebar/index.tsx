import { useState } from 'react'
import { ContainerSidebar, LinkNavigate } from './styled'
import { useNavigate } from 'react-router-dom'

export function Sidebar() {
  const [selectedItem, setSelectedItem] = useState('')
  const navigate = useNavigate()

  function handleClick(item: string) {
    console.log(item)
    setSelectedItem(item)
  }

  return (
    <ContainerSidebar>
      <div>
        <img
          src="https://www.adobe.com/br/express/create/logo/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium"
          alt="batata"
        />
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
