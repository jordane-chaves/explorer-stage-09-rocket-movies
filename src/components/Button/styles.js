import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${({ theme, $variant }) =>
    $variant === 'primary' ? theme.colors.pink : theme.colors.black};
  border: none;
  border-radius: 0.5rem;
  color: ${({ theme, $variant }) =>
    $variant === 'primary' ? theme.colors.gray_900 : theme.colors.pink};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 1.125rem 1.5rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Text = styled.span`
  font-weight: 600;
  line-height: 1.25;
`
