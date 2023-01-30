import { Outlet } from 'react-router-dom'
import ContainerPage from '../components/ContainerPage'
import ContainerTagPage from '../components/ContainerTagPage'
import PageHeader from '../components/PageHeader'
import { NavLink } from '../Interfaces/NavLinks'

const navLinks: Array<NavLink> = [
  {
    title: 'Ventas',
    page: 'sales',
  },
  {
    title: 'Inventario',
    page: 'inventory',
  },
  /* {
    title: 'Usuarios',
    page: 'users',
  },
  {
    title: 'Precios',
    page: 'prices',
  },
  {
    title: 'Familia',
    page: 'family',
  },
  {
    title: 'Minimos y Maximos',
    page: 'minmax',
  },
  {
    title: 'Pendientes',
    page: 'pending',
  }, */
  {
    title: 'Devoluciones',
    page: 'repayments',
  },
]

const ReportsView = () => {
  return (
    <ContainerPage>
      <PageHeader title={'Reportes'} navLinks={navLinks} />
      <ContainerTagPage>
        <Outlet />
      </ContainerTagPage>
    </ContainerPage>
  )
}

export default ReportsView
