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
        <p>
          Desenvolvido por:
          <a
            href="http://github.com/adonaikjr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adonaikjr
          </a>
        </p>
        <img src="https://github.com/adonaikjr.png" alt="batata" />
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
