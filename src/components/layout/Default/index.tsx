import { Outlet } from 'react-router-dom'
import { ContainerLayoutDefault } from './styled'
import { HeroPattern } from '../../../pages/app/heroPattern'
import { Sidebar } from '../../Sidebar'
import { AuthContext } from '../../../hook/auth'
import { useContext } from 'react'

export function LayoutDefault() {
  const { user, isModal, isModalSaida }: any = useContext(AuthContext)

  return (
    <>
      <ContainerLayoutDefault>
        {user && !isModal && !isModalSaida && <Sidebar />}
        <Outlet />
        <HeroPattern />
      </ContainerLayoutDefault>
    </>
  )
}
