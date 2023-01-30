import { Outlet } from 'react-router-dom'
import ContainerPage from '../components/ContainerPage'
import ContainerTagPage from '../components/ContainerTagPage'
import PageHeader from '../components/PageHeader'
import { NavLink } from '../Interfaces/NavLinks'

const navLinks: Array<NavLink> = [
  {
    title: 'Empleados',
    page: 'employees',
  },
  {
    title: 'Proveedores',
    page: 'providers',
  },
  {
    title: 'Clientes',
    page: 'clients',
  },
  /*  {
    title: 'Catalogo de marcas de autos',
    action: () => alert('Catalogo de marcas de autos'),
  },
  {
    title: 'Catalogo de modelos de autos',
    action: () => alert('Catalogo de modelos de autos'),
  },
  {
    title: 'Catalogo de año de autos',
    action: () => alert('Catalogo de año de autos'),
  }, */
]

const AdminView = () => {
  return (
    <ContainerPage>
      <PageHeader title={'Administracion'} navLinks={navLinks} />
      <ContainerTagPage>
        <Outlet />
      </ContainerTagPage>
    </ContainerPage>
  )
}

export default AdminView
