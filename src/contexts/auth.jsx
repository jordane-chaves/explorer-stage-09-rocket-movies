import { createContext, useEffect, useState } from 'react'

import { api } from '../services/api'
import { AccessTokenStorage } from '../storages/access-token-storage'
import { UserStorage } from '../storages/user-storage'

/**
 * @typedef User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {string|null} [avatar_id]
 * @property {string|null} [avatar_url]
 * @property {string} [password]
 * @property {string} [oldPassword]
 */

/**
 * @typedef SignInParams
 * @property {string} email
 * @property {string} password
 */

/**
 * @typedef AuthContextProps
 * @property {boolean} isAuthenticated
 * @property {User} user
 * @property {(params: SignInParams) => Promise<void>} signIn
 * @property {() => Promise<void>} signOut
 * @property {({ user: User }) => Promise<void>} updateProfile
 */

/** @type {React.Context<AuthContextProps>} */
export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  /**
   * @param {SignInParams} params
   */
  async function signIn({ email, password }) {
    try {
      const authResponse = await api.post('/sessions', { email, password })
      const { access_token: accessToken } = authResponse.data

      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
      AccessTokenStorage.set(accessToken)

      const profileResponse = await api.get('/profile')
      const { user } = profileResponse.data

      UserStorage.set(user)
      setUser(user)
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message)
      } else {
        return alert('Falha ao fazer login.')
      }
    }
  }

  function signOut() {
    AccessTokenStorage.delete()
    UserStorage.delete()

    setUser(null)
  }

  /**
   * @param {{ user: User, avatarFile: File | null }} params
   */
  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('file', avatarFile)

        const response = await api.post('/avatar', fileUploadForm)

        const { avatar_id, avatar_url } = response.data

        user.avatar_id = avatar_id
        user.avatar_url = avatar_url
      }

      await api.put('/accounts', {
        avatarId: user.avatar_id,
        name: user.name,
        email: user.email,
        password: user.password,
        oldPassword: user.oldPassword,
      })

      const updatedUser = {
        ...user,
        password: undefined,
        oldPassword: undefined,
      }

      UserStorage.set(updatedUser)
      setUser(updatedUser)

      return alert('Perfil atualizado com sucesso!')
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message)
      } else {
        return alert('Falha ao atualizar o perfil.')
      }
    }
  }

  useEffect(() => {
    const accessToken = AccessTokenStorage.get()
    const savedUser = UserStorage.get()

    if (accessToken && savedUser) {
      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
      setUser(savedUser)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, signIn, signOut, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  )
}
