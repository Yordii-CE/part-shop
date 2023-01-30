import Crud from '../crud/Crud'
import { useActiveTag } from '../hooks/useActiveTag'

const VehiclesBrands = () => {
  useActiveTag('Marcas')
  return <Crud resourceName="brands" />
}
export default VehiclesBrands
