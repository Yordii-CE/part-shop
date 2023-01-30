import { useContext, useEffect } from 'react'
import { PageNavsContext } from '../../context/PageNavsContext'

const VehiclesInventory = () => {
  const { setActiveTag } = useContext(PageNavsContext)
  useEffect(() => {
    setActiveTag('Inventario')
  }, [])

  return <h1>Inventario</h1>
}
export default VehiclesInventory
