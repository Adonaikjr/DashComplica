import { Outlet } from 'react-router-dom'
import { ContainerLayoutDefault } from './styled'
import { HeroPattern } from '../../../pages/app/heroPattern'
import { Sidebar } from '../../Sidebar'
import { AuthContext } from '../../../hook/auth'
import { useContext } from 'react'

export function LayoutDefault() {
  const { user }: any = useContext(AuthContext)

  return (
    <>
      <ContainerLayoutDefault>
        {user && <Sidebar />}
        <Outlet />
        <HeroPattern />
      </ContainerLayoutDefault>
    </>
  )
}
