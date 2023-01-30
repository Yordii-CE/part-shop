import Crud from '../crud/Crud'
import { useActiveTag } from '../hooks/useActiveTag'

const AdminProviders = () => {
  useActiveTag('Proveedores')
  return <Crud resourceName="providers" />
}

export default AdminProviders
