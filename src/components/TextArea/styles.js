import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.input_background};
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  width: 100%;

  &:has(textarea:focus) {
    outline: 2px solid ${({ theme }) => theme.colors.pink};
  }
`

export const TextArea = styled.textarea`
  border: none;
  background: transparent;
  resize: none;

  line-height: 1.25;

  padding: 1rem;
  min-height: 10rem;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text_600};
  }
`
