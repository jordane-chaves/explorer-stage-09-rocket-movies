import { Input } from '../Input'

export function HeaderSearch(props) {
  return (
    <Input.Root className="search">
      <Input.Element placeholder="Pesquisar pelo título" {...props} />
    </Input.Root>
  )
}
