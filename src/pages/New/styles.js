import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  height: calc(100% - 113px);
  padding: 1.5rem 3rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    padding: 1rem;
    overflow-y: auto;
  }

  ${({ theme }) => theme.screens.md} {
    padding: 3rem 8rem;
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  width: max-content;

  > h1 {
    font-weight: 500;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    button {
      width: 100%;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      flex: 1;

      div {
        min-width: 10rem;
        width: 100%;
      }
    }
  }

  > section {
    h3 {
      color: ${({ theme }) => theme.colors.text_400};
      font-size: 1.25rem;
      font-weight: 400;
    }

    .tags {
      background-color: ${({ theme }) => theme.colors.black};
      border-radius: 0.5rem;

      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
      gap: 1.5rem;

      margin-top: 1.5rem;
      padding: 1rem;
    }
  }

  ${({ theme }) => theme.screens.md} {
    > div {
      gap: 2.5rem;

      > div {
        flex-direction: row;
        gap: 2.5rem;
      }
    }
  }

  ${({ theme }) => theme.screens.lg} {
    > div {
      flex-direction: row;
    }
  }
`
