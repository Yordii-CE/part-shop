import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useRef } from 'react'
import { DeleteModal } from '../modals/DeleteModal'

interface Props {
  id: number
}
export const DeleteAction = ({ id }: Props) => {
  const ownerDeleteModal = useRef<HTMLDivElement>(null)
  return (
    <div ref={ownerDeleteModal}>
      <Button color="error">
        <DeleteIcon color="action"></DeleteIcon>
      </Button>
      <DeleteModal target={ownerDeleteModal} id={id}></DeleteModal>
    </div>
  )
}
