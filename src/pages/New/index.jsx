import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { NewTag } from '../../components/NewTag'
import { api } from '../../services/api'
import { Container, Content, Form, Heading } from './styles'

/**
 * @typedef Tag
 * @property {string} id
 * @property {string} name
 */

export function New() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState()
  const [rating, setRating] = useState()
  const [watchedAt, setWatchedAt] = useState()

  /** @type {[string[], React.Dispatch<React.SetStateAction<string[]>>]} */
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddTag() {
    if (!newTag) {
      return
    }

    setTags((prev) => [...prev, newTag])
    setNewTag('')
  }

  /**
   * @param {Tag} deleted
   */
  function handleRemoveTag(deleted) {
    setTags((prev) => prev.filter((item) => item.id !== deleted.id))
  }

  async function handleCreateMovie() {
    if (!title) {
      return alert('Digite um "nome" para o filme.')
    }

    const isValidRating = rating >= 0 && rating <= 5

    if (rating && !isValidRating) {
      return alert('Digite uma nota entre 0 e 5')
    }

    const movie = {
      title,
      description,
      rating: rating && Number(rating),
      watchedAt,
      tagsNames: tags,
    }

    try {
      await api.post('/movies', movie)

      alert('Filme criado com sucesso!')
      return navigate('/')
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message)
      } else {
        return alert('Falha ao criar o filme.')
      }
    }
  }

  return (
    <Container>
      <Header.Root>
        <Header.Logo />
        <Header.Search />
        <Header.Profile />
      </Header.Root>

      <Content>
        <div>
          <Heading>
            <ButtonText.Root to={-1}>
              <ButtonText.Icon icon={FiArrowLeft} />
              <ButtonText.Content text="Voltar" />
            </ButtonText.Root>

            <h1>Novo filme</h1>
          </Heading>

          <Form>
            <div>
              <Input.Root>
                <Input.Element
                  type="text"
                  placeholder="Título"
                  onChange={(event) => setTitle(event.target.value)}
                  required
                />
              </Input.Root>

              <div>
                <Input.Root>
                  <Input.Element
                    type="number"
                    placeholder="Sua nota (de 0 a 5)"
                    onChange={(event) => setRating(event.target.value)}
                  />
                </Input.Root>

                <Input.Root label="Assistido em">
                  <Input.Element
                    type="datetime-local"
                    onChange={(event) => setWatchedAt(event.target.value)}
                  />
                </Input.Root>
              </div>
            </div>

            <TextArea.Root>
              <TextArea.Element
                placeholder="Observações"
                onChange={(event) => setDescription(event.target.value)}
              />
            </TextArea.Root>

            <section>
              <h3>Marcadores</h3>

              <div className="tags">
                {tags.map((tag, index) => (
                  <NewTag
                    key={index}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))}

                <NewTag
                  isNew
                  placeholder="Nova tag"
                  value={newTag}
                  onChange={(event) => setNewTag(event.target.value)}
                  onClick={handleAddTag}
                />
              </div>
            </section>

            <div>
              <Button.Root variant="secondary" onClick={handleBack}>
                <Button.Text value="Cancelar" />
              </Button.Root>

              <Button.Root onClick={handleCreateMovie}>
                <Button.Text value="Criar" />
              </Button.Root>
            </div>
          </Form>
        </div>
      </Content>
    </Container>
  )
}
