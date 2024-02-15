import { Container, InputContainer } from './styles'

export function InputRoot({ children, label, ...rest }) {
  return (
    <Container {...rest}>
      {label && <label>{label}</label>}
      <InputContainer>{children}</InputContainer>
    </Container>
  )
}
