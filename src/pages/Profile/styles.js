import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;

  > header {
    background-color: rgb(
      from ${({ theme }) => theme.colors.pink} r g b / 0.05
    );

    display: flex;
    align-items: center;

    padding: 3.5rem 3rem;
  }

  ${({ theme }) => theme.screens.sm} {
    > header {
      padding: 3.5rem 8rem;
    }
  }
`

export const Avatar = styled.div`
  height: 8rem;
  width: 8rem;

  margin: -4rem auto 2rem;

  position: relative;

  > img {
    border-radius: 50%;
    height: 8rem;
    width: 8rem;
    object-fit: cover;
  }

  > label {
    background-color: ${({ theme }) => theme.colors.pink};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 3rem;
    width: 3rem;

    position: absolute;
    bottom: -0.25rem;
    right: -0.25rem;

    svg {
      color: ${({ theme }) => theme.colors.gray_900};
    }

    input {
      display: none;
    }
  }

  ${({ theme }) => theme.screens.sm} {
    margin: -6rem auto 3.5rem;
    height: 12rem;
    width: 12rem;

    > img {
      height: 12rem;
      width: 12rem;
    }

    > label {
      bottom: 0.25rem;
      right: 0.5rem;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  align-self: center;

  max-width: 20rem;
  margin: 0 3rem;

  > fieldset {
    border: none;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`
