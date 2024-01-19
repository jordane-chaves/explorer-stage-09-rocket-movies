import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100%;
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;

  height: calc(100% - 113px);

  padding: 3rem 8rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 2rem;
      font-weight: 400;
    }
  }
`

export const MovieList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  margin-top: 3rem;
  padding-right: 0.5rem;

  overflow-y: auto;
`
