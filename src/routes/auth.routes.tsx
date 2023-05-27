import { Route, Routes } from 'react-router-dom'
import { LayoutDefault } from '../components/layout/Default'
import { App } from '../pages/app/App'
import { Sign } from '../pages/SignIn'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<Sign />} />
      </Route>
    </Routes>
  )
}
