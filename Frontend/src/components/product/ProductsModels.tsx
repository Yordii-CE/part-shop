import Crud from '../crud/Crud'
import { useActiveTag } from '../hooks/useActiveTag'

const VehiclesModels = () => {
  useActiveTag('Modelos')
  return <Crud resourceName="models" />
}
export default VehiclesModels
