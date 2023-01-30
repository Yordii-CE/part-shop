import { Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { useRef } from 'react'
import { UpdateModal } from '../modals/UpdateModal'

interface Props {
  row: any
}
export const UpdateAction = ({ row }: Props) => {
  const ownerUpdateModal = useRef<HTMLDivElement>(null)
  return (
    <div ref={ownerUpdateModal}>
      <Button color="warning">
        <EditIcon color="action"></EditIcon>
      </Button>
      <UpdateModal target={ownerUpdateModal} row={row}></UpdateModal>
    </div>
  )
}
