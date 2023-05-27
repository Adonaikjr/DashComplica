import { Outlet } from 'react-router-dom'
import { ContainerLayoutDefault } from './styled'
import { HeroPattern } from '../../../pages/app/heroPattern'
import { Sidebar } from '../../Sidebar'
import { AuthContext } from '../../../hook/auth'
import { useContext } from 'react'
import { Footer } from '../../Footer'

export function LayoutDefault() {
  const { user, isModal }: any = useContext(AuthContext)

// se o usuario existir mostra a sidebar
  //se isModal for verdadeiro tira a sidebar
  return (
    <>
      <ContainerLayoutDefault>
        {user && !isModal && <Sidebar />}
        <Outlet />
        <HeroPattern />
      </ContainerLayoutDefault>
    </>
  )
}
