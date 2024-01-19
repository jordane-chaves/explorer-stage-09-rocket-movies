import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import avatarPlaceholder from '../../assets/avatar-placeholder.svg'
import { Input } from '../../components/Input'
import { Avatar, Container, Form } from './styles'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { useAuth } from '../../hooks/auth'
import { useState } from 'react'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const avatarUrl = user.avatar_url ?? avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState()
  const [password, setPassword] = useState()

  async function handleUpdateProfile() {
    const updatedUser = {
      ...user,
      name,
      email,
      password,
      oldPassword,
    }

    await updateProfile({ user: updatedUser, avatarFile })
  }

  /**
   * @param {FileList} files
   */
  async function handleChangeAvatar(files) {
    const file = files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <ButtonText.Root to={-1}>
          <ButtonText.Icon icon={FiArrowLeft} />
          <ButtonText.Content text="Voltar" />
        </ButtonText.Root>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt={`Foto de ${user.name}`} />

          <label htmlFor="avatar">
            <FiCamera />
            <input
              id="avatar"
              type="file"
              onChange={(event) => handleChangeAvatar(event.target.files)}
            />
          </label>
        </Avatar>

        <fieldset>
          <Input.Root>
            <Input.Icon icon={FiUser} />
            <Input.Element
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Input.Root>

          <Input.Root>
            <Input.Icon icon={FiMail} />
            <Input.Element
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Input.Root>
        </fieldset>

        <fieldset>
          <Input.Root>
            <Input.Icon icon={FiLock} />
            <Input.Element
              type="password"
              placeholder="Senha atual"
              value={oldPassword}
              onChange={(event) => setOldPassword(event.target.value)}
            />
          </Input.Root>

          <Input.Root>
            <Input.Icon icon={FiLock} />
            <Input.Element
              type="password"
              placeholder="Nova senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Input.Root>
        </fieldset>

        <Button.Root onClick={handleUpdateProfile}>
          <Button.Text value="Salvar" />
        </Button.Root>
      </Form>
    </Container>
  )
}
