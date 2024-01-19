import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FiArrowLeft, FiClock, FiEdit } from 'react-icons/fi'

import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Movie } from '../../components/Movie'
import { Container, Content, Description, Heading, Info } from './styles'
import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar-placeholder.svg'
import { Button } from '../../components/Button'

/**
 * @typedef Tag
 * @property {string} id
 * @property {string} name
 */

/**
 * @typedef Spectator
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {string} avatar_id
 * @property {string} avatar_url
 */

/**
 * @typedef Movie
 * @property {string} id
 * @property {string} spectator_id
 * @property {Spectator} spectator
 * @property {string} title
 * @property {string} description
 * @property {Number} [rating]
 * @property {Tag[]} tags
 * @property {string} watched_at
 * @property {string} created_at
 * @property {string} updated_at
 */

export function Preview() {
  /** @type {[Movie, React.Dispatch<React.SetStateAction<Movie>>]} */
  const [movie, setMovie] = useState([])

  const authorAvatarUrl = movie.spectator?.avatar_url ?? avatarPlaceholder

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`)

      setMovie(response.data.movie)
    }

    fetchMovie()
  }, [params.id])

  const createdAt =
    movie.created_at &&
    new Date(movie.created_at)
      .toLocaleString(navigator.language, {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      })
      .replace(', ', ' às ')

  return (
    <Container>
      <Header.Root>
        <Header.Logo />
        <Header.Search />
        <Header.Profile />
      </Header.Root>

      {movie && (
        <Content>
          <div>
            <Heading>
              <div>
                <ButtonText.Root to={-1}>
                  <ButtonText.Icon icon={FiArrowLeft} />
                  <ButtonText.Content text="Voltar" />
                </ButtonText.Root>

                <Button.Root onClick={() => navigate(`/edit/${params.id}`)}>
                  <Button.Icon icon={FiEdit} />
                  <Button.Text value="Editar" />
                </Button.Root>
              </div>

              <div className="title">
                <h1>{movie.title}</h1>
                {movie.rating && <Movie.Rating size="md" rate={movie.rating} />}
              </div>

              <Info>
                <div>
                  <img
                    src={authorAvatarUrl}
                    alt={`Foto de ${movie.spectator?.name}`}
                  />
                  <span>Por {movie.spectator?.name}</span>
                </div>

                <div>
                  <FiClock />
                  <span>{createdAt}</span>
                </div>
              </Info>
            </Heading>

            <Movie.Tags tags={movie.tags} />

            <Description>{movie.description}</Description>
          </div>
        </Content>
      )}
    </Container>
  )
}
