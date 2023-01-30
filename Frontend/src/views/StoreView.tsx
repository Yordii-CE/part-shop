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
    title: 'Cotizaciones',
    page: 'quotes',
  },
  {
    title: 'Devoluciones',
    page: 'repayments',
  },
]

const StoreView = () => {
  return (
    <ContainerPage>
      <PageHeader title={'Tienda'} navLinks={navLinks} />
      <ContainerTagPage>
        <Outlet />
      </ContainerTagPage>
    </ContainerPage>
  )
}

export default StoreView
