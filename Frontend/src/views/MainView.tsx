import { Outlet } from 'react-router-dom'
import Drawer from '../components/Drawer'
import {
  Store,
  CarRepairTwoTone,
  QrCode2,
  Dashboard,
  Report,
  AdminPanelSettings,
  Receipt,
} from '@mui/icons-material'
import { Option } from '../Interfaces/Drawer'

const options: Array<Option> = [
  {
    title: 'Dashboard',
    icon: Dashboard,
    page: 'dash',
    top: true,
  },
  {
    title: 'Tienda',
    icon: Store,
    page: 'store',
    top: true,
  },
  {
    title: 'Productos',
    icon: CarRepairTwoTone,
    page: 'products',
  },
  {
    title: 'Administracion',
    icon: AdminPanelSettings,
    page: 'admin',
    top: true,
  },
  {
    title: 'Etiquetas',
    icon: QrCode2,
    page: 'tags',
  },
  {
    title: 'Tickets',
    icon: Receipt,
    page: 'tickets',
  },
  {
    title: 'Reportes',
    icon: Report,
    page: 'reports',
  },
]

const MainView = () => {
  if (!localStorage.getItem('user-token')) location.href = '/login'
  return (
    <>
      <Drawer options={options} />
      <div className="h-4/5">
        <Outlet />
      </div>
    </>
  )
}

export default MainView
