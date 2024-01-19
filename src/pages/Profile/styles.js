import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  > header {
    background-color: rgb(
      from ${({ theme }) => theme.colors.pink} r g b / 0.05
    );

    display: flex;
    align-items: center;

    padding: 3.5rem 8rem;
  }
`

export const Avatar = styled.div`
  height: 12rem;
  width: 12rem;

  margin: -6rem auto 3.5rem;

  position: relative;

  > img {
    border-radius: 50%;
    height: 12rem;
    width: 12rem;
    min-height: 12rem;
    min-width: 12rem;
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
    bottom: 0.25rem;
    right: 0.5rem;

    svg {
      color: ${({ theme }) => theme.colors.gray_900};
    }

    input {
      display: none;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  max-width: 20rem;
  margin: 0 auto;

  > fieldset {
    border: none;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`
