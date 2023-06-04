import { Route, Routes } from 'react-router-dom'
import { LayoutDefault } from '../components/layout/Default'
import { Home } from '../pages/Home'
import { Entrada } from '../pages/Entrada'
import { Saida } from '../pages/Saida'
import { Config } from '../pages/Config'

export function AppRotate() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/entrada" element={<Entrada />} />
        <Route path="/saida" element={<Saida />} />
        <Route path="/config" element={<Config />} />
      </Route>
    </Routes>
  )
}
