import { useContext, useState } from 'react'
import { ContainerApp } from './styled'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/all'
import Balance from 'react-wrap-balancer'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { api } from '../../service'
import { Link, useNavigate } from 'react-router-dom'

export function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e: any) {
    e.preventDefault()
    if (!name || !email || !password) {
      return alert('Preencha todos os campos! ⚠️')
    }
    try {
      await api.post('/users', {
        name,
        email,
        password,
      })
      alert('Cadastrado com sucesso! ✅')
      navigate('/signin')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ContainerApp>
      <section>
        <form>
          <fieldset>
            <legend>Sign Up</legend>
            <label>
              Name
              <Input
                type="text"
                value={name}
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Email
              <Input
                placeholder="Email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Password
              <Input
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <p>
              Já possui conta? <Link to="/signin">Entre</Link>
            </p>
            <Button title="Criar conta" onClick={handleSubmit} />
          </fieldset>
        </form>
      </section>
    </ContainerApp>
  )
}
