import { useState } from 'react'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

import { api } from '../../services/api'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Background, Container, Form } from './styles'
import { useNavigate } from 'react-router-dom'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos.')
    }

    try {
      await api.post('/accounts', {
        name,
        email,
        password,
      })

      alert('Usuário cadastrado com sucesso!')
      return navigate('/')
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message)
      } else {
        return alert('Falha ao se cadastrar.')
      }
    }
  }

  return (
    <Container>
      <main>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <Form>
          <h2>Crie sua conta</h2>

          <Input.Root>
            <Input.Icon icon={FiUser} />
            <Input.Element
              type="text"
              placeholder="Nome"
              onChange={(event) => setName(event.target.value)}
            />
          </Input.Root>

          <Input.Root>
            <Input.Icon icon={FiMail} />
            <Input.Element
              type="email"
              placeholder="E-mail"
              onChange={(event) => setEmail(event.target.value)}
            />
          </Input.Root>

          <Input.Root>
            <Input.Icon icon={FiLock} />
            <Input.Element
              type="password"
              placeholder="Senha"
              onChange={(event) => setPassword(event.target.value)}
            />
          </Input.Root>

          <Button.Root onClick={handleSignUp}>
            <Button.Text value="Cadastrar" />
          </Button.Root>

          <ButtonText.Root to={-1}>
            <ButtonText.Icon icon={FiArrowLeft} />
            <ButtonText.Content text="Voltar para login" />
          </ButtonText.Root>
        </Form>
      </main>

      <Background />
    </Container>
  )
}
