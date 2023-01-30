import Crud from '../crud/Crud'
import { useActiveTag } from '../hooks/useActiveTag'

const VehiclesClassifications = () => {
  useActiveTag('Clasificaciones')
  return <Crud resourceName="classifications" />
}
export default VehiclesClassifications
