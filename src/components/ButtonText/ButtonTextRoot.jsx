import { Container } from './styles'

export function ButtonTextRoot({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>
}
