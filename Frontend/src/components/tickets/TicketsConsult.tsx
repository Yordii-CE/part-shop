import Crud from '../crud/Crud'
import { useActiveTag } from '../hooks/useActiveTag'

const TicketsList = () => {
  useActiveTag('Consultar')
  return <Crud resourceName="tickets" />
}

export default TicketsList
