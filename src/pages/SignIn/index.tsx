import { useContext, useState } from 'react'
import { Input } from '../../components/Input'
import { api } from '../../service'
import { ContainerApp } from '../app/styled'
import { Button } from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../hook/auth'

export function Sign() {
  const { handleSignUp, setEmail, setPassword }: any = useContext(AuthContext)

  return (
    <ContainerApp>
      <section>
        <form>
          <fieldset>
            <legend>Sign In</legend>
            <label>
              Email
              <Input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Password
              <Input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <p>
              Não possui conta? <Link to="/">Cadastre-se</Link>
            </p>
            <Button title="Entrar" onClick={handleSignUp} />
          </fieldset>
        </form>
      </section>
    </ContainerApp>
  )
}
