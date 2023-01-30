import { TextField } from '@mui/material'
import { upperCamelCase } from './crud/helpers/text'

interface Field {
  name: string
  type?: string
  value?: string
}

interface Props {
  fields: Array<Field>
}

const HashTypes = {
  int: 'number',
  float: 'number',
  datetime: 'date',

  password: 'password',
  email: 'email',
}

const Fields = ({ fields }: Props) => {
  //remove field id (auto generate)
  let fieldsWithoutId = fields.filter((field) => field.name != 'id')

  return fieldsWithoutId.length > 5 ? (
    //With grid
    <div className="grid grid-cols-2 gap-4">
      {fieldsWithoutId.map(({ name, type, value }, i) => (
        <TextField
          key={i}
          //@ts-ignore
          type={HashTypes[type]}
          label={upperCamelCase(name + '')}
          name={name}
          margin="normal"
          defaultValue={value}
          required
          fullWidth
          autoFocus
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
        />
      ))}
    </div>
  ) : (
    //Without grid
    <div>
      {fieldsWithoutId.map(({ name, type, value }, i) => (
        <TextField
          key={i}
          //@ts-ignore
          type={HashTypes[type]}
          label={upperCamelCase(name + '')}
          name={name}
          margin="normal"
          defaultValue={value}
          required
          fullWidth
          autoFocus
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
        />
      ))}
    </div>
  )
}

export default Fields
