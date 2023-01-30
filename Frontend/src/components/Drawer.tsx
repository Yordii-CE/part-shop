import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Logout from '@mui/icons-material/Logout'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import { Option } from '../Interfaces/Drawer'
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { Link } from 'react-router-dom'
const drawerWidth = 240

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

type props = {
  options: Array<Option>
}

export default function PersistentDrawerLeft({ options }: props) {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Toolbar>
        <IconButton
          onClick={handleDrawerOpen}
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon color="primary" />
        </IconButton>
      </Toolbar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          {options
            .filter((el) => el.top)
            .map(({ title, icon: Icon, page }, i) => (
              <Link key={i} to={page.toString()} onClick={handleDrawerClose}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon></Icon>
                    </ListItemIcon>

                    <ListItemText>{title}</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
        </List>
        <Divider />
        <List>
          {options
            .filter((el) => !el.top)
            .map(({ title, icon: Icon, page }, i) => (
              <Link key={i} to={page.toString()} onClick={handleDrawerClose}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon></Icon>
                    </ListItemIcon>

                    <ListItemText>{title}</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
        </List>
        <Divider />
        <List>
          <Link
            to={'/login'}
            onClick={() => {
              localStorage.removeItem('user-token')
              handleDrawerClose()
            }}
          >
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Logout></Logout>
                </ListItemIcon>

                <ListItemText>Salir</ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </Box>
  )
}
