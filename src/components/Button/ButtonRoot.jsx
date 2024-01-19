import { Container } from './styles'

export function ButtonRoot({
  children,
  loading = false,
  variant = 'primary',
  ...rest
}) {
  return (
    <Container type="button" $variant={variant} disabled={loading} {...rest}>
      {loading ? 'Carregando...' : children}
    </Container>
  )
}
