import { Typography } from '@mui/material'
type props = {
  nameDev: String
}

function BasicCopyright({ nameDev }: props) {
  return (
    <Typography
      style={{
        position: 'absolute',
        bottom: 10,
        textAlign: 'center',
        width: '100%',
      }}
      variant="body2"
      color="text.secondary"
      align="center"
    >
      {'Copyright © '}

      <span>Developer {nameDev} </span>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default BasicCopyright
