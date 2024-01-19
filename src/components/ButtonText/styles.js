import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(Link)`
  color: ${({ theme }) => theme.colors.pink};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`
