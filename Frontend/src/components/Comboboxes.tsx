import { FormControl, InputLabel } from '@mui/material'
import Combobox from './Combobox'
import { upperCamelCase } from './crud/helpers/text'

interface Option {
  id: number
  name: string
}

// Lo exporto para usarlo en CreateModal, eetc
export interface ComboBox {
  label: string
  name: string
  defaultValue?: number
  options: Array<Option>
}

interface Props {
  comboboxes: Array<ComboBox>
}

const Comboboxes = ({ comboboxes }: Props) => {
  return comboboxes.length > 5 ? (
    //With grid
    <div className="grid grid-cols-2 gap-4">
      {comboboxes.map(({ label, defaultValue, name, options }, i) => (
        <FormControl required key={i} sx={{ m: 1, minWidth: 100 }} size="small">
          <InputLabel id="demo-select-small">
            {upperCamelCase(label)}
          </InputLabel>
          <Combobox
            defaultValue={defaultValue}
            name={name}
            options={options}
          ></Combobox>
        </FormControl>
      ))}
    </div>
  ) : (
    //Without grid
    <div>
      {comboboxes.map(({ label, defaultValue, name, options }, i) => (
        <FormControl
          required
          key={i}
          sx={{ mt: 2, mr: 1, minWidth: 180 }}
          size="small"
        >
          <InputLabel id="demo-select-small">
            {upperCamelCase(label)}
          </InputLabel>
          <Combobox
            defaultValue={defaultValue}
            name={name}
            options={options}
          ></Combobox>
        </FormControl>
      ))}
    </div>
  )
}

export default Comboboxes
