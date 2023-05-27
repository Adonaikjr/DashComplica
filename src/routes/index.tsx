import { useContext } from 'react'
import { AuthContext } from '../hook/auth'
import { AppRotate } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function AppRoutes() {
  const { user }: any = useContext(AuthContext)
  return <>{user ? <AppRotate /> : <AuthRoutes />}</>
}
