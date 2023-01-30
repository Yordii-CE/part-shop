import Crud from '../crud/Crud'
import { useActiveTag } from '../hooks/useActiveTag'

const AdminUsers = () => {
  useActiveTag('Empleados')
  return <Crud resourceName="employees" />
}

export default AdminUsers
