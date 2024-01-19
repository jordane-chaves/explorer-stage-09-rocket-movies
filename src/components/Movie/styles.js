import styled from 'styled-components'

export const Container = styled.div`
  background-color: rgb(from ${({ theme }) => theme.colors.pink} r g b / 0.05);
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;
  width: 100%;

  cursor: pointer;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text_100};
  font-size: 1.5rem;
  font-weight: 700;
`

export const Content = styled.div`
  color: ${({ theme }) => theme.colors.text_400};
  font-family: 'Roboto', sans-serif;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.gray_900};
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.colors.gray_200};
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;

  padding: 0.5rem 1rem;
`

export const Rating = styled.div`
  svg {
    stroke: ${({ theme }) => theme.colors.pink};
    stroke-width: 4px;
  }
`
