import { MenuItem, Select } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'

interface Option {
  id: number
  name: string
}
interface Props {
  defaultValue?: number
  name: string
  options: Array<Option>
}

interface State {
  value: number
}

const Combobox = ({ defaultValue, name, options }: Props) => {
  const [value, setValue] = useState<State['value']>(defaultValue || 1)

  const handleChange = (event: SelectChangeEvent) => {
    setValue(Number(event.target.value))
  }
  return (
    <Select
      required
      labelId="demo-select-small"
      id="demo-select-small"
      label={name}
      name={name}
      value={value.toString()}
      onChange={handleChange}
    >
      {options.map(({ id, name }, i) => (
        <MenuItem key={i} value={id}>
          {name}
        </MenuItem>
      ))}
    </Select>
  )
}

export default Combobox
