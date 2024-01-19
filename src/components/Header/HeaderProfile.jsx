import { Link } from 'react-router-dom'

import avatarPlaceholder from '../../assets/avatar-placeholder.svg'
import { Profile } from './styles'
import { useAuth } from '../../hooks/auth'

export function HeaderProfile() {
  const { user, signOut } = useAuth()

  const avatarUrl = user.avatar_url ?? avatarPlaceholder

  function handleSignOut() {
    signOut()
  }

  return (
    <Profile to="/profile">
      <div>
        <strong>{user.name}</strong>
        <Link onClick={handleSignOut}>sair</Link>
      </div>

      <img src={avatarUrl} alt={`Foto de ${user.name}`} />
    </Profile>
  )
}
