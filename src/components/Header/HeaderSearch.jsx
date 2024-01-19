import { Input } from '../Input'

export function HeaderSearch(props) {
  return (
    <Input.Root>
      <Input.Element placeholder="Pesquisar pelo título" {...props} />
    </Input.Root>
  )
}
