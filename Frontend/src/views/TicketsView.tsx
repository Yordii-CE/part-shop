import { Outlet } from 'react-router-dom'
import ContainerPage from '../components/ContainerPage'
import ContainerTagPage from '../components/ContainerTagPage'
import PageHeader from '../components/PageHeader'
import { NavLink } from '../Interfaces/NavLinks'

const navLinks: Array<NavLink> = [
  {
    title: 'Consultar',
    page: 'consult',
  },
  {
    title: 'Imprimir',
    page: 'print',
  },
]

const TicketsView = () => {
  return (
    <ContainerPage>
      <PageHeader title={'Tickets'} navLinks={navLinks} />
      <ContainerTagPage>
        <Outlet />
      </ContainerTagPage>
    </ContainerPage>
  )
}

export default TicketsView
