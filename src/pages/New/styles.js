import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  height: calc(100% - 113px);
  padding: 3rem 8rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    padding: 1rem;
    overflow-y: auto;
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
    gap: 2.5rem;

    button {
      width: 100%;
    }

    > div {
      display: flex;
      gap: 2.5rem;
      flex: 1;
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
`
