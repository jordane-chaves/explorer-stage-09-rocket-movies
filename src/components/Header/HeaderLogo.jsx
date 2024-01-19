import { Link } from 'react-router-dom'

import { Logo } from './styles'

export function HeaderLogo() {
  return (
    <Link to="/">
      <Logo>RocketMovies</Logo>
    </Link>
  )
}
