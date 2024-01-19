import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_900};

  display: flex;
  align-items: center;
  gap: 4rem;

  padding: 1.5rem 8rem;
  width: 100%;
`

export const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.pink};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
`

export const Profile = styled(Link)`
  background-color: 1px solid ${({ theme }) => theme.colors.gray_950};

  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-size: 0.875rem;

  > div {
    text-align: right;
    min-width: max-content;

    a {
      color: ${({ theme }) => theme.colors.text_600};
    }

    strong {
      display: block;
      color: ${({ theme }) => theme.colors.text_100};
    }
  }

  > img {
    border: 1px solid ${({ theme }) => theme.colors.gray_800};
    border-radius: 50%;

    object-fit: cover;

    height: 4rem;
    width: 4rem;
  }
`
