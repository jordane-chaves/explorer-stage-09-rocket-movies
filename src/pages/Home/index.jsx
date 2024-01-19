import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Movie } from '../../components/Movie'
import { Container, Content, MovieList } from './styles'
import { api } from '../../services/api'

/**
 * @typedef Movie
 * @property {string} id
 * @property {string} spectatorId
 * @property {string} title
 * @property {string} description
 * @property {Number} rating
 * @property {Date} watched_at
 * @property {Date} created_at
 * @property {Date} updated_at
 */

export function Home() {
  /** @type {[Movie[], React.Dispatch<React.SetStateAction<Movie[]>>]} */
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  function handlePreview(id) {
    return navigate(`/preview/${id}`)
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get('/movies')
      setMovies(response.data.movies)
    }

    fetchMovies()
  }, [])

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <Container>
      <Header.Root>
        <Header.Logo />
        <Header.Search onChange={(event) => setSearch(event.target.value)} />
        <Header.Profile />
      </Header.Root>

      <Content>
        <div>
          <h1>Meus filmes</h1>

          <Button.Root onClick={() => navigate('/new')}>
            <Button.Icon icon={FiPlus} />
            <Button.Text value="Adicionar filme" />
          </Button.Root>
        </div>

        <MovieList>
          {filteredMovies.map((movie) => (
            <Movie.Root key={movie.id} onClick={() => handlePreview(movie.id)}>
              <Movie.Header>
                <Movie.Title title={movie.title} />
                <Movie.Rating rate={movie.rating} />
              </Movie.Header>
              <Movie.Content>{movie.description}</Movie.Content>
              <Movie.Tags tags={movie.tags} />
            </Movie.Root>
          ))}
        </MovieList>
      </Content>
    </Container>
  )
}
