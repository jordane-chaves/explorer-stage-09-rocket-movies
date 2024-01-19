import { useState } from 'react'
import { FiMail, FiLock } from 'react-icons/fi'

import { Background, Container, Form } from './styles'

import { useAuth } from '../../hooks/auth'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn() {
    return signIn({ email, password })
  }

  return (
    <Container>
      <main>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <Form>
          <h2>Faça seu login</h2>

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

          <Button.Root onClick={handleSignIn}>
            <Button.Text value="Entrar" />
          </Button.Root>

          <ButtonText.Root to="/register">
            <ButtonText.Content text="Criar conta" />
          </ButtonText.Root>
        </Form>
      </main>

      <Background />
    </Container>
  )
}
