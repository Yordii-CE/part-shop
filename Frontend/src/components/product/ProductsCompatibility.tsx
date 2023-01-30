import { useContext, useEffect } from 'react'
import { PageNavsContext } from '../../context/PageNavsContext'

const VehiclesCompatibility = () => {
  const { setActiveTag } = useContext(PageNavsContext)
  useEffect(() => {
    setActiveTag('Compatibilidad')
  }, [])
  return <h1>VehiclesCompatibility</h1>
}

export default VehiclesCompatibility
