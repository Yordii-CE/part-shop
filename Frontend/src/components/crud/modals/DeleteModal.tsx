import { Button } from '@mui/material'
import { RefObject, useContext } from 'react'
import { toast } from 'react-toastify'
import Modal from '../../Modal'
import { ResourceContext } from '../context/resource'
import { resources } from '../resources'

interface Props {
  target: RefObject<HTMLDivElement>
  id: number
}
export const DeleteModal = ({ target, id }: Props) => {
  const { name, setRows } = useContext(ResourceContext)
  const handleDelete = async () => {
    if (!resources[name].delete) {
      alert('Eliminacion no implementada para este recurso')
    }
    let tk = localStorage.getItem('user-token')
    const response = await resources[name].delete(tk, id)

    if (response.status == 'success') {
      toast('Registro eliminado con exito', {
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
    <Modal target={target} title="Eliminar registro">
      <>
        <span className="text-sm">
          ¿Realmente deseas eliminar este registro?
        </span>
        <div onClick={handleDelete}>
          <Button
            sx={{ marginTop: '20px' }}
            variant="contained"
            size="small"
            color="primary"
          >
            <small>Confirmar eliminacion</small>
          </Button>
        </div>
      </>
    </Modal>
  )
}
