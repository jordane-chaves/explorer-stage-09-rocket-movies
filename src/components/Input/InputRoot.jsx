import { Container, InputContainer } from './styles'

export function InputRoot({ children, label }) {
  return (
    <Container>
      {label && <label>{label}</label>}
      <InputContainer>{children}</InputContainer>
    </Container>
  )
}
