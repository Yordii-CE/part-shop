import { Button } from '@mui/material'
import { useRef } from 'react'
import { CreateModal } from '../modals/CreateModal'

interface Props {
  children: string //Texto a mostrar
}
export const CreateAction = ({ children }: Props) => {
  const ownerCreateModal = useRef<HTMLDivElement>(null)
  return (
    <div ref={ownerCreateModal} className="flex justify-end mb-2">
      <Button size="small" sx={{ fontSize: 10 }}>
        {children}
      </Button>
      <CreateModal target={ownerCreateModal}></CreateModal>
    </div>
  )
}
