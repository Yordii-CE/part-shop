import * as React from 'react'
import Box from '@mui/material/Box'
import CloseIcon from '@mui/icons-material/Close'

import Modal from '@mui/material/Modal'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}

interface Props {
  target: React.RefObject<HTMLElement>
  title: String
  children: JSX.Element
}

export default function BasicModal({ target, title, children }: Props) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  target.current?.addEventListener('click', handleOpen)
  return (
    <div>
      <Modal
        sx={{ marginTop: -20 }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded">
          <div className="flex justify-between items-center">
            <p className="text-blue-600/100 p-1">{title}</p>
            <div onClick={handleClose} className="cursor-pointer">
              <CloseIcon color="primary" />
            </div>
          </div>
          {children}
        </Box>
      </Modal>
    </div>
  )
}
