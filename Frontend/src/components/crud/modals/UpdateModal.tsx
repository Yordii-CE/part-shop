import { Button } from '@mui/material'
import { RefObject, useContext, useEffect } from 'react'
import { toast } from 'react-toastify'
import Comboboxes, { ComboBox } from '../../Comboboxes'
import Fields from '../../Fields'
import Modal from '../../Modal'
import { ResourceContext } from '../context/resource'
import { resources, services } from '../resources'

interface Props {
  target: RefObject<HTMLDivElement>
  row: any
}
export const UpdateModal = ({ target, row }: Props) => {
  const { name, fields, setRows } = useContext(ResourceContext)

  //Trim 's' ejmp 'brands' => 'brand'
  let tablesServices = Array.from(services).map((el) =>
    el.substring(0, el.length - 1)
  )

  //Simple -> Campos que que NO son colleccion de tabla
  let simpleFields = fields.filter((el) => !tablesServices.includes(el.name))

  //Complex -> Campos que que son colleccion de tabla
  let complexFields = fields.filter((el) => tablesServices.includes(el.name))

  let fieldsWithValue = simpleFields.map((el) => ({
    ...el,
    value: row[el.name],
  }))

  let comboboxesWithValue: Array<ComboBox> = []

  useEffect(() => {
    let tk = localStorage.getItem('user-token')
    ;(async () => {
      for (const field of complexFields) {
        let resource = `${field.name}s`

        const response = await resources[resource].get(tk)

        const getDefaultValue = (rowField: string) => {
          let field = response.data[resource].find(
            (el: any) => el.name == rowField
          )
          if (field) return field.id
          return undefined
        }

        if (response.status == 'success') {
          comboboxesWithValue.push({
            defaultValue: getDefaultValue(row[field.name]),
            label: `${field.name}`,
            name: `${field.name}Id`,
            options: response.data[resource],
          })
        }
      }
    })()
  })

  const handleEdit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    if (!resources[name].put) {
      alert('Actualizacion no implementada para este recurso')
    }

    let tk = localStorage.getItem('user-token')

    const form = evt.target as HTMLFormElement,
      inputs = Array.from(form.querySelectorAll('[name]'))

    let data = inputs.map((el: any) => ({ [el.name]: el.value }))
    data = data.reduce((acc: any, el: any) => ({ ...acc, ...el }), {})

    const response = await resources[name].put(tk, Number(row.id), data)

    if (response.status == 'success') {
      toast('Registro editado con exito', {
        className: 'bg-green-500',
      })

      //Refrescamos los datos
      let response = await resources[name].get(tk)
      let rows = response.data[name]
      setRows(rows)
    }

    if (response.status == 'fail') {
      toast(response.data.message, {
        style: {
          backgroundColor: 'bg-red-600',
        },
      })
    }
  }
  return (
    <Modal target={target} title="Actualizar registro">
      <form onSubmit={handleEdit}>
        <Fields fields={fieldsWithValue}></Fields>
        <Comboboxes comboboxes={comboboxesWithValue}></Comboboxes>

        <Button
          type="submit"
          sx={{ marginTop: '20px' }}
          variant="contained"
          size="small"
          color="primary"
        >
          <small>Confirmar edicion</small>
        </Button>
      </form>
    </Modal>
  )
}
