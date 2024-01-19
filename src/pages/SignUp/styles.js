import styled from 'styled-components'

import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  display: flex;
  align-items: stretch;

  height: 100vh;
  width: 100%;

  > main {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 8.5rem;

    h1 {
      color: ${({ theme }) => theme.colors.pink};
      font-size: 3rem;
      font-weight: 700;
    }

    p {
      color: ${({ theme }) => theme.colors.gray_400};
      font-size: 0.875rem;

      margin-top: 0.5rem;
    }
  }
`

export const Form = styled.form`
  max-width: 24rem;
  margin-top: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;

  > h2 {
    color: ${({ theme }) => theme.colors.text_100};
    font-size: 1.5rem;
    font-weight: 500;

    align-self: flex-start;

    margin-bottom: 3rem;
  }

  > div:has(input) + div:has(input) {
    margin-top: 0.5rem;
  }

  > button {
    margin-top: 1.5rem;
  }

  > a {
    color: ${({ theme }) => theme.colors.pink};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    margin-top: 3rem;

    > svg {
      font-size: 1.5rem;
    }
  }
`

export const Background = styled.div`
  background: url(${backgroundImg}) no-repeat center/cover;
  flex: 1;

  position: relative;

  &::before {
    content: '';

    background: ${({ theme }) => theme.colors.gray_950};
    opacity: 0.8;

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`
