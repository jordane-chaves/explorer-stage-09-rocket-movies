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

  width: 100%;

  > div:nth-child(1) {
    display: flex;
    justify-content: space-between;

    width: 100%;
  }

  > div.title {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    h1 {
      font-weight: 500;
    }
  }
`

export const Info = styled.div`
  color: ${({ theme }) => theme.colors.text_100};
  display: flex;
  gap: 1rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img,
    svg {
      height: 1.25rem;
      width: 1.25rem;
    }

    img {
      border: 1px solid ${({ theme }) => theme.colors.gray_800};
      border-radius: 50%;
      object-fit: cover;
    }

    svg {
      color: ${({ theme }) => theme.colors.pink};
    }

    span {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
    }
  }
`

export const Description = styled.div`
  font-weight: 400;
  line-height: 1.5;
  text-align: justify;

  > p + p {
    margin-top: 1.6rem;
  }
`
