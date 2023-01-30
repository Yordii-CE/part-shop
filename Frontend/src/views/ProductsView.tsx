import PageHeader from '../components/PageHeader'
import { NavLink } from '../Interfaces/NavLinks'
import { Outlet } from 'react-router-dom'
import ContainerPage from '../components/ContainerPage'
import ContainerTagPage from '../components/ContainerTagPage'

const navLinks: Array<NavLink> = [
  {
    title: 'Lista',
    page: 'list',
  },

  {
    title: 'Marcas',
    page: 'brands',
  },
  {
    title: 'Modelos',
    page: 'models',
  },
  {
    title: 'Clasificaciones',
    page: 'classifications',
  },
  {
    title: 'Compatibilidad',
    page: 'compatibility',
  },
]

const VehiclesView = () => {
  return (
    <ContainerPage>
      <PageHeader title={'Productos'} navLinks={navLinks} />
      <ContainerTagPage>
        <Outlet />
      </ContainerTagPage>
    </ContainerPage>
  )
}

export default VehiclesView
