import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme, $isNew }) =>
    $isNew ? 'transparent' : theme.colors.input_background};
  border-radius: 0.5rem;
  outline: ${({ theme, $isNew }) =>
    $isNew ? `2px dashed ${theme.colors.text_600}` : 'none'};

  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 1rem;

  > input {
    background: transparent;
    border: none;

    color: ${({ theme }) => theme.colors.white};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1;

    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.colors.text_600};
    }
  }

  > button {
    background: transparent;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 1.5rem;
    width: 1.5rem;

    > svg {
      color: ${({ theme }) => theme.colors.pink};
      height: 1.5rem;
      width: 1.5rem;
    }
  }
`
