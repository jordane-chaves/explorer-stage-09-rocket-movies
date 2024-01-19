import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  position: relative;

  > label {
    color: ${({ theme }) => theme.colors.text_600};

    position: absolute;
    top: -2rem;
  }
`

export const InputContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.input_background};
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  padding-inline: 1rem;

  &:has(input:focus) {
    outline: 2px solid ${({ theme }) => theme.colors.pink};
  }
`

export const IconContainer = styled.div`
  color: ${({ theme }) => theme.colors.text_600};

  height: 1.25rem;
  width: 1.25rem;
`

export const Input = styled.input`
  border: none;
  background: transparent;

  line-height: 1;

  padding-block: 1rem;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text_600};
  }
`
