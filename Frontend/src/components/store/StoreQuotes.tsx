import Crud from '../crud/Crud'
import { useActiveTag } from '../hooks/useActiveTag'

const StoreQuotes = () => {
  useActiveTag('Cotizaciones')
  return <Crud resourceName="quotations" />
}

export default StoreQuotes
