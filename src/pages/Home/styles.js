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

  padding: 1.5rem 3rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: clamp(1.5rem, 2vw, 2rem);
      font-weight: 400;
      margin-bottom: 2rem;
    }
  }

  ${({ theme }) => theme.screens.md} {
    padding: 3rem 8rem;

    > div:nth-child(1) {
      flex-direction: row;
      margin-bottom: 0;
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
