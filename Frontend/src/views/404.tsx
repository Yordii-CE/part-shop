import { Alert } from '@mui/material'

function _404() {
  return (
    <Alert
      style={{
        position: 'absolute',
        bottom: 10,
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
      }}
      severity="error"
    >
      404 — The page you are looking for doesn't exist
    </Alert>
  )
}

export default _404
