import Crud from '../crud/Crud'
import { useActiveTag } from '../hooks/useActiveTag'

const StoreRepayments = () => {
  useActiveTag('Devoluciones')
  return <Crud resourceName="repayments" />
}

export default StoreRepayments
