import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_900};

  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-areas: 'logo profile' 'search search';
  gap: 2rem;

  padding: 1.5rem 3rem;
  width: 100%;

  .search {
    grid-area: search;
  }

  ${({ theme }) => theme.screens.md} {
    grid-template-areas: 'logo search profile';
    grid-template-columns: max-content 1fr max-content;
    gap: 4rem;

    padding: 1.5rem 8rem;
  }
`

export const Logo = styled.h1`
  grid-area: logo;

  color: ${({ theme }) => theme.colors.pink};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
`

export const Profile = styled(Link)`
  grid-area: profile;

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
