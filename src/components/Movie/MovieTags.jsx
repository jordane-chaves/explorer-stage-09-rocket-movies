import { TagContainer, Tag } from './styles'

export function MovieTags({ tags = [], ...rest }) {
  return (
    <TagContainer {...rest}>
      {tags.map((tag) => (
        <Tag key={tag.id}>{tag.name}</Tag>
      ))}
    </TagContainer>
  )
}
