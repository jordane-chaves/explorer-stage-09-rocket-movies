import { Title } from './styles'

export function MovieTitle({ title, ...rest }) {
  return <Title {...rest}>{title}</Title>
}
