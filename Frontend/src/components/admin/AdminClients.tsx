import Crud from '../crud/Crud'
import { useActiveTag } from '../hooks/useActiveTag'

const AdminClients = () => {
  useActiveTag('Clientes')
  return <Crud resourceName="clients" />
}

export default AdminClients
